const dbController = require('./dbController');

module.exports = {
    search(req, res){

        const search = req.params.userSearch.toLowerCase()
        const db = dbController.awakenDatabase()
        const user = cacheUserInfo(req); 

        dbController.searchTagInDataBase(db, search, user, res)
            
    }
}

function cacheUserInfo(req){
    const user = {}

    user.name = req.params.userName
    user.tags = req.params.userTags

    return user
}
