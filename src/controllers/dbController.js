const database = require('../db/db'); 
const usersData = require('../db/usersData');

module.exports = {
    async queryUserDBCredentials(unauthenticatedUser){
        let query
        let res = {}
        try{
            await database.sync();
 
            query = await usersData.findAll({
                where: {
                    email: `${unauthenticatedUser}`
                }
            })
        }   catch (error) {
            console.log(error);
        }
        //console.log(query)
        res.name = query[0].dataValues.name
        res.email = query[0].dataValues.email
        res.tag = query[0].dataValues.tag
        res.password = query[0].dataValues.password
        return res
    },

    async searchTagInDataBase(search){
        let query
        let res = []
        if (search != 'all') {
        try{
            await database.sync();
            query = await usersData.findAll({
                attributes: ['id', 'tag']
            })
        }   catch (error) {
            console.log(error);
            }

        //Como o banco não aceita RegEx, vamos filtra em memória:
        let usersFoundId = []
        let j = 0;
        for (let i = 0; i < query.length; i++){
            //ler, dividir e armazenar id do usuário num array
            console.log(query[i].dataValues.tag.includes(`${search}`))
            //dividir as tags
            query[i].dataValues.tag = query[i].dataValues.tag.split(' ')
            //Procura nas tag a pesquisa do usuário e separa os id dos usuários encontrados.            
            if(query[i].dataValues.tag.includes(`${search}`) == true)
            {
               //console.log(query[i].dataValues)
                usersFoundId[j] = query[i].dataValues.id
                j++
                console.log('users: ' + j)
            }
            }
        
        //Finalmente, seleciona no banco de dados somente os usuários que possuem a tag pesquisada
        let filteredResponse =  []
        const { Op } = require("sequelize");
        for(let i = 0; i < usersFoundId.length; i++){
            try{
                await database.sync();
                filteredResponse = await usersData.findAll({
                    where: {
                        id: {
                            [Op.or]: usersFoundId
                          }
                    }
                })
                
            }   catch (error) {
                console.log(error);
            }
        } 

        } else{
            try{
                await database.sync();
                filteredResponse = await usersData.findAll()               
            }   catch (error) {
                console.log(error);
            }
        }
        //finalmente padronizar a resposta e enviar 
        for(let i = 0; i < filteredResponse.length; i++){
            res[i] = filteredResponse[i].dataValues
        }
        return res
    },

    async checkIfEmailExist(subscribeEmail){
        let emailInDatabase = 'false'
        try{
            await database.sync();
            emailExist = await usersData.findAll({
                where: {
                    email: `${subscribeEmail}`
                }
            })
        }   catch (error) {
            console.log(error);
        }
        if (emailExist.length) emailInDatabase = 'true'
        return emailInDatabase
    },

    async subscribeUser(subscribeData){
        try{
            await database.sync();
            let insertInDb = await usersData.create({
                email: `${subscribeData.subscribeEmail}`,
                name: `${subscribeData.subscribeName}`,
                password: `${subscribeData.subscribePassword}`,
                tag: `${subscribeData.subscribeTags}`
            })
            //console.log(insertInDb)
        }
        catch(error){
            console.log(error)
        }
    },
}
 