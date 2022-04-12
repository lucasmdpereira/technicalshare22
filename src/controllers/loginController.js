const services = require('../services/services')
const renders = require('../renders')

module.exports = {
    async authenticate(req, res){ 
        req = req.body
        const dbUserCredentials = await services.queryUserDBCredentials(req.userCredentials) 
            if (dbUserCredentials.password == req.userPassword){
                res.continue = 'true'
                console.log(res)
                }   else{
                    res.continue = 'false'
                }
                return res
            },
     }

