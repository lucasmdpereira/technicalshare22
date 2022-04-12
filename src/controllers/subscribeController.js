const dbController = require('./dbController')

module.exports = {
    async subscribe(req, res){

        let subscribeData = JSON.parse(req.params.dataSubscribe)
        //console.log("It's me subscribeController")
        //console.log(req.body)
        //console.log(req)
        //Verificar se email existe na base de dado
        const checkIfEmailExist = await dbController.checkIfEmailExist(subscribeData.subscribeEmail)
        
        if (checkIfEmailExist == 'false') dbController.subscribeUser(subscribeData)
        console.log(subscribeData)
        }        
    }
