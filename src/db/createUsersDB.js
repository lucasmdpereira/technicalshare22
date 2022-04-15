//index.js
(async () => {
    const database = require('./dbUsers');
    const usersData = require('./usersData');

    try {
        const resultado = await database.sync();

        const names = ['Antônio Belchior', 'Morais Moreira', 'Flávio Basso', 'Ney Matogrosso', 'Alceu Valença', 'Rita Lee', 'Gal Costa', 'Baby Consuelo', 'Duda Beat', 'Marina Sena', 'Gloria Groove', 'Liniker Campos'];
        const gender = ['Ele/Dele', 'Ele/Dele', 'Ele/Dele', 'Ele/Dele', 'Ele/Dele', 'Ela/Dela', 'Ela/Dela', 'Ela/Dela', 'Ela/Dela', 'Ela/Dela', 'Ele/Dele', 'Ela/Dela']
        const emails = ['antonio@belchior', 'morais@moreira', 'flavio@basso', 'ney@matogrosso', 'alceu@valenca', 'rita@lee', 'gal@costa', 'baby@consuelo', 'duda@beat', 'marina@sena', 'gloria@groove', 'liniker@campos'];
        const offices = ['UX Research', 'FullStack', 'UX Writer', 'Devops', 'FrontEnd', 'BackEnd', 'Service Designer', 'Desenvolvedor','Arquiteto de TI','Trainee', 'Trainee', 'Trainee']
        const passwords = ['antonio', 'morais', 'flavio', 'ney', 'alceu', 'rita', 'gal', 'baby', 'duda', 'marina', 'gloria', 'liniker'];
        const tags = ['javascript;figma;node;testes;scrum;php', 'research;design thinking;testes', 'javascript;research;testes', 'design thinking;java;scrum', 'java;node','javascript;node;testes', 'research;java;scrum', 'design thinking', 'figma;testes;php;scrum', 'research;testes;php','java;node;php','figma;node;scrum;php']
        const pictures = ['profilepicture-antonio@belchior.svg', 'profilepicture-morais@moreira.svg', 'profilepicture-flavio@basso.svg', 'profilepicture-ney@matogrosso.svg', 'profilepicture-alceu@valenca.svg','profilepicture-rita@lee.svg', 'profilepicture-gal@costa.svg', 'profilepicture-baby@consuelo.svg', 'profilepicture-duda@beat.svg', 'profilepicture-marina@sena.svg', 'profilepicture-gloria@groove.svg', 'profilepicture-liniker@campos.svg']

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