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
        try{
            await database.sync();
            query = await usersData.findAll({
                attributes: ['id', 'tag']
            })
        }   catch (error) {
            console.log(error);
            }
        //console.log(query)
   
        let usersFoundId = []
        let j = 0;
        for (let i = 0; i < query.length; i++){
            //ler, dividir e armazenar id do usuário num array
            console.log(query[i].dataValues.tag.includes(`${search}`))
            query[i].dataValues.tag = query[i].dataValues.tag.split(' ')
            //console.log(query[i].dataValues.tag)
            if(query[i].dataValues.tag.includes(`${search}`) == true)
            {
               //console.log(query[i].dataValues)
                usersFoundId[j] = query[i].dataValues.id
                j++
                console.log('users: ' + j)
            }
            }
            console.log(usersFoundId.length)
            // console.log('número de usuários encontrados: ' + usersFoundId.length)
        //console.log(j)
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
        
        
            
        
            //finalmente padronizar a resposta e enviar 
            console.log(filteredResponse.length)
            for(let i = 0; i < filteredResponse.length; i++)
            {
                res[i] = filteredResponse[i].dataValues
            }
            //console.log(res)
            return res
        
        
    
    },
        //filtrar resposta e pegar id
        
        // for (let i = 0; i < query.length; i++){
        //     query[i] = query[i].dataValues
        // }

        //console.log(filteredResponse)
        //return query





        // let sql
        // if  (search == 'all') {sql= `SELECT ALL * FROM users`}
        //     else    {sql = `SELECT ALL * FROM users WHERE tags LIKE '%${search}%'`}
        // db.all(sql,[],(err,row)=>{
        //     let erro
        //     let searchFound
        //     if (row != 0){
        //         searchFound = true
        //         renderController.renderSearchPage(user, searchFound, row, res) 
        //         erro = false
        //     }   else{
        //         searchFound = false
        //         erro= '404: Nenhuma entrada encontrada'
        //         if (err){erro= '400:' + err}   
        //         renderController.renderSearchPage(user, searchFound, row, res) 
        //     }

        // })
}
 