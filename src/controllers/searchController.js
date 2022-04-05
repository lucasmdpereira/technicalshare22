const sqlite3 = require('sqlite3').verbose();
const path = require('path')

let fileIndex = {};
fileIndex.bootstrapCoreCSS = "../../../assets/dist/css/bootstrap.min.css" 
fileIndex.bootstrapCustomStyles = "../../../styles/navbar-top-fixed.css" 
fileIndex.bootstrapScript = "../../../assets/dist/js/bootstrap.bundle.min.js"


module.exports = {
    search(req, res){

        //console.log(req)

        let sql

        let search = req.params.userSearch.toLowerCase()
        
         // console.log('search= ' +  search)
        // console.log('results: ')

        const db = new sqlite3.Database(path.join(__dirname, '..', 'db', 'users.db'), sqlite3.OPEN_READWRITE, (err) => {
            if (err) return console.error(err.message)
        } )

        regExrsearch = `%${search}%`
        sql = `SELECT ALL * FROM users WHERE tags LIKE '${regExrsearch}'`
        
        db.all(sql,[],(err,row)=>{
            let user = {}
            user.name = req.params.userName
            user.tags = req.params.userTags
            if (err) return console.error(err.message)
            if (row == 0) return console.error("not found")
            //res.status(404).json({erro: 'Usuário não encontrado, pro favor contacte o administrador do sistema'})     
            for (let i = 0; i < row.length; i++){
                row[i].tags = splitTags(row[i].tags)
            }
            //console.log(userName)
            
            res.render('perfil', {page: 'search', user: user, data: row, search: true, number_of_results: row.length, fileIndex: fileIndex})
            //console.log(row)
        })
    }
}


function splitTags(tags){
    return tags.split('#').filter(Boolean);
}