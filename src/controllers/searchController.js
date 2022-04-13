const services = require('../services/services')
const renders = require('../renders')

module.exports = {
    async search(req, res){
 
        //const user = cacheUserInfo(req); //apagar caso não precise mais
        let search = req.params.userSearch
        console.log(search)
        let searchFound
        let tagsNamesOfficeIds = await services.tagsNamesOfficeIds()
        // console.log('INFO => services.takeTagsAndIds():')
        // console.log(tagsNamesOfficeIds)

        if (search == 'all'){
            res.search = tagsNamesOfficeIds
        }   else{

        //quebrar search em palavras
        search = search.toLowerCase().split(' ')
        console.log('INFO => search:')
        console.log(search)

        //for para procurar
        
        //procura cada linha recebida pela query
        let i = 0;
        let k = 0;
        let ids = []
        for (i; i < tagsNamesOfficeIds.length; i++){
            // console.log(`INFO => services.takeTagsAndIds(${i}):`)
            // console.log(tagsAndIds[i])
            let j = 0;
            let found = 'false'
            for (j; j < search.length; j++){
                // console.log(`INFO => search(${j}):`)
                // console.log(search[j])
                isIncludeTag = tagsNamesOfficeIds[i].tag.toLowerCase().includes(`${search[j]}`)
                isIncludeName = tagsNamesOfficeIds[i].name.toLowerCase().includes(`${search[j]}`)
                isIncludeOffice = tagsNamesOfficeIds[i].office.toLowerCase().includes(`${search[j]}`)
                if (isIncludeTag === true || isIncludeName === true || isIncludeOffice === true) found = 'true'  
                
                // console.log(`INFO => ${isInclude}`)
                if (found == 'true'){
                    ids[k] = tagsNamesOfficeIds[i]
                    // console.log(`INFO => id's found:` + ids[k])
                    k++
                }
            }
        }
        // console.log(`INFO => id's found:`)
        // console.log(ids)
        res.search = [...new Set(ids)]
        // console.log(`INFO => id's unique:`)
        
        
    }
        //console.log('INFO => Users found: ')
        
        //console.log(res.search)




        return res
    }
}


// function cacheUserInfo(req){
//     const user = {}

//     user.name = req.params.userName
//     user.email = req.params.userEmail

//     return user
// }
