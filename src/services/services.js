const database = require('../db/dbUsers'); 
const usersData = require('../db/usersData');

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
                market_saude: req.market_saude,
                market_industria: req.market_industria,
                market_publico: req.market_publico,
                market_banking: req.market_banking,
                market_varejo: req.market_varejo,
                market_educacao: req.market_educacao,
                market_finance: req.market_finance,
                market_seguros: req.market_seguros,
                office: req.subscribeOffice,
                bio: req.subscribebio,
                password: req.subscribePassword,
                picture: 0
        })

        //console.log(insertData)
    } catch (error) {
        console.log(error);
    }
    },


}
 