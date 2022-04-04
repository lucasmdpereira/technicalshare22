const sqlite3 = require('sqlite3').verbose();
const path = require('path')

module.exports = {
    search(req, res){
        let sql

        let search = req.params.userSearch.toLowerCase()
        console.log('search= ' +  search)
        console.log('results: ')

        const db = new sqlite3.Database(path.join(__dirname, '..', 'db', 'users.db'), sqlite3.OPEN_READWRITE, (err) => {
            if (err) return console.error(err.message)
        } )

        regExrsearch = `%#%${search}%#%`
        sql = `SELECT ALL * FROM users WHERE tags LIKE '${regExrsearch}'`
        
        db.all(sql,[],(err,row)=>{
            let userName = req.params.userName
            if (err) return console.error(err.message)
            if (row == 0) return console.error("not found")
            //res.status(404).json({erro: 'Usuário não encontrado, pro favor contacte o administrador do sistema'})
            res.render('search', {user: userName, data: row, search: true})
            console.log(row)
        })
    }
}