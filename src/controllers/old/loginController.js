const dbControler = require('../dbController')
const renderController = require('../renderController')

module.exports = {
    async authenticate(req, res){  
        console.log(req)  
        const unauthenticatedUser = getUserCredentials(req, res)
        //console.log(unauthenticatedUser)
        
        if(unauthenticatedUser.email == 'blank') {
            renderController.renderPerfilPage(false, 0, res)
        }   else{
                const dbUserCredentials = await dbControler.queryUserDBCredentials(unauthenticatedUser.email) 
                if (dbUserCredentials.password == unauthenticatedUser.password){
                    console.log("100: Usuário autenticado")
                    renderController.renderPerfilPage(true, dbUserCredentials, res)
                }   else{
                    console.log("404: Not found")
                    renderController.renderPerfilPage(false, 0, res)
                }
            }
        //console.log('dbUserEmail: ' + dbUser.email)
        //console.log('dbUserPassword: ' + dbUser.password)
    },
}

function getUserCredentials(req){
    const unauthenticatedUser = {}

    unauthenticatedUser.email = req.params.userCredentials
    unauthenticatedUser.password = req.body.userPassword

    //console.log(req)
    return unauthenticatedUser
}