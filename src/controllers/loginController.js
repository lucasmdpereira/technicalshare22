const dbControler = require('./dbController')

module.exports = {
    authenticate(req, res){    
        const unauthenticatedUser = getUserCredentials(req)
        const db = dbControler.awakenDatabase()
        
        console.log(unauthenticatedUser)

        dbControler.userCredentialsAuthenticate(db,unauthenticatedUser, res)   
    },
}

function getUserCredentials(req){
    const unauthenticatedUser = {}

    unauthenticatedUser.credentials = req.params.userCredentials
    unauthenticatedUser.password = req.body.userPassword

    return unauthenticatedUser
}