//index.js
(async () => {
    const database = require('./dbUsers');
    const usersData = require('./usersData');

    try {
        const resultado = await database.sync();

        const names = ['Pedro Ayuda', 'Junia Jr.', 'Alf Deet', 'Roberta Hermes', 'Michael Scott'];
        const gender = ['Ele/Dele', 'Elu/Delu', 'Ele/Dele', 'Ela/Dela', 'Ele/Dele']
        const emails = ['pedro@ayuda', 'juninho@jr', 'alf@deet', 'roberta@hermes', 'michael@scott'];
        const offices = ['Dev Senior', 'Trainee', 'UX', 'Analista de RH', 'Best boss']
        const passwords = ['pedro', 'juninho', 'alf', 'roberta', 'michael'];
        const tags = ['node.js;scrum master;java', 'node.js;scrum master;javascript ', 'node.js;scrum master;java ', 'node.js;scrum master;javascript ', 'product owner']
        const pictures = ['profilepicture-pedro@ayuda.svg', 'profilepicture-juninho@jr.svg', 'profilepicture-alf@deet.svg', 'profilepicture-roberta@hermes.svg', 'profilepicture-michael@scott.svg']

        for (let i = 0; i < names.length; i++) {
            const insertData = await usersData.create({
                name: names[i],
                gender: gender[i],
                tag: tags[i],
                email: emails[i],
                office: offices[i],
                bio: 0,
                password: passwords[i],
                picture: pictures[i]
            })
        }
  
    } catch (error) {
        console.log(error);
    }






})();