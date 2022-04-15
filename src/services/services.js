const { response } = require('express');
const database = require('../db/dbUsers'); 
const usersData = require('../db/usersData');
const questionsData = require('../db/questionsData');

module.exports = {
    async queryUserDBCredentials(unauthenticatedUserEmail){
        let query
        const dbUserCredentials = {}
        // console.log(unauthenticatedUserEmail)
        try{
            await database.sync();
 
            query = await usersData.findAll({
                where: {
                    email: `${unauthenticatedUserEmail}`
                }
            })
        }   catch (error) {
            console.log(error);
        }
        //console.log(query)
        if(query.length == 0) {
            dbUserCredentials.name = 'null'
            dbUserCredentials.email = 'null'
            dbUserCredentials.password = 'null'
        }   else{
            dbUserCredentials.name = query[0].dataValues.name
            dbUserCredentials.email = query[0].dataValues.email
            dbUserCredentials.password = query[0].dataValues.password  
        }
        //console.log(dbUserCredentials)
        return dbUserCredentials
    },
    async tagsNamesOfficeIds(){
        let query
        try{
            await database.sync();
            query = await usersData.findAll({
                attributes: ['id', 'tag', 'name','office','picture','email', 'gender']
            })
        }   catch (error) {
            console.log(error);
            }
        for (let i = 0; i < query.length; i++){
            query[i] = query[i].dataValues
        }
        //console.log(query)
        return query
    },
    async addUser(req,res){
        try {
            const resultado = await database.sync();
            const insertData = await usersData.create({
                name: req.subscribeName,
                gender: req.subscribeGender,
                tag: req.subscribeTags,
                email: req.subscribeEmail,
                picture: req.picture,
                office: req.subscribeOffice,
                bio: req.subscribebio,
                password: req.subscribePassword,
        })

        //console.log(insertData)
    } catch (error) {
        console.log(error);
    }
    },
    async ultimasPerguntas(req, res){
        try{

            //console.log('INFO*** =>')
            //console.log(req.user)
            
            await database.sync();
            //recebe ultimas perguntas feitas a mim
            let perguntas = await questionsData.findAll({ limit: 3, order: [['idQuestion', 'DESC']],
                where: {
                    quemFoiPerguntado: `${(req.user)}`
                }
            })
            res.perguntas = perguntas
            //console.log('INFO*** services =>')
            //console.log(res.perguntas)

            // let user =  req.user

            // //console.log(user)
            // await database.sync();
            // query = await questionsData.findAll({ limit: 2, order: [['updatedAt', 'DESC']]},{
            //     where: {
            //         quemPerguntou: `${user}`
            //     }
            // })
            // //console.log(query)
            // res.euPerguntei = query
            // query2 = await questionsData.findAll({ limit: 2, order: [['updatedAt', 'DESC']]},{
            //     where: {
            //         quemFoiPerguntado: `${user}`
            //     }
            // })
            // res.fuiPerguntado = query2
        }   catch (error) {
            console.log(error);
            }
        return res
    },

}
 