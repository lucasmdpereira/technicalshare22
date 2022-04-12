//index.js
(async () => {
    const database = require('./db');
    const usersData = require('./usersData');
 
    try {
        const resultado = await database.sync();
        //console.log(resultado);

        const names = ['Pedro Ayuda', 'Juninho Jr.', 'Alf Deet', 'Roberta Hermes', 'Michael Scott'];
        const emails = ['pedro@ayuda', 'juninho@jr', 'alf@deet', 'roberta@hermes', 'michael@scott'];
        const passwords = ['pedro', 'juninho', 'alf', 'roberta', 'michael'];
        const tags = ['5 ','4 5 ','3 4 5 ','2 3 4 5 ','1 2 3 4 5 ']

        for(let i = 0; i < names.length; i++){
            const insertData = await usersData.create({
                email: emails[i],
                name: names[i],
                password: passwords[i],
                tag: tags[i]
            })
            //console.log(insertData)
        }
    } catch (error) {
        console.log(error);
    }
})();