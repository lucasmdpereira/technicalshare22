const dbController = require('./dbController')
const renderController = require('./renderController')

module.exports = {
    async search(req, res){

        const user = cacheUserInfo(req); 
        
        let search = req.params.userSearch.toLowerCase()
        search = await dbController.searchTagInDataBase(search)

        //console.log(search)
        if (search.length != 0){
             searchFound = true
             renderController.renderSearchPage(user, searchFound, search, res) 
        }   else{
             searchFound = false
             renderController.renderSearchPage(user, searchFound, search, res) 
        }
}
}


function cacheUserInfo(req){
    const user = {}

    user.name = req.params.userName
    user.email = req.params.userEmail

    return user
}
