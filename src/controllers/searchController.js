const services = require('../services/services')
const renders = require('../renders')

module.exports = {
    async search(req, res) {

        let search = req.params.userSearch
        let searchFound
        let tagsNamesOfficeIds = await services.tagsNamesOfficeIds()

        if (search == 'all') {
            res.search = tagsNamesOfficeIds
        } else {

            //quebrar search em palavras
            search = search.toLowerCase().split(' ')

            //procura cada linha recebida pela query
            let i = 0;
            let k = 0;
            let ids = []
            for (i; i < tagsNamesOfficeIds.length; i++) {
                let j = 0;
                let found = 'false'
                for (j; j < search.length; j++) {

                    isIncludeTag = tagsNamesOfficeIds[i].tag.toLowerCase().includes(`${search[j]}`)
                    isIncludeName = tagsNamesOfficeIds[i].name.toLowerCase().includes(`${search[j]}`)
                    isIncludeOffice = tagsNamesOfficeIds[i].office.toLowerCase().includes(`${search[j]}`)
                    if (isIncludeTag === true || isIncludeName === true || isIncludeOffice === true) found = 'true'

                    if (found == 'true') {
                        ids[k] = tagsNamesOfficeIds[i]
                        k++
                    }
                }
            }
            res.search = [...new Set(ids)]
        }
        return res
    }
}