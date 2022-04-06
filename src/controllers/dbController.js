const sqlite3 = require('sqlite3').verbose();
const path = require('path')
const renderController = require('./renderController')

module.exports = {
    awakenDatabase(){
    const db = new sqlite3.Database(path.join(__dirname, '..', 'db', 'users.db'), sqlite3.OPEN_READWRITE, (err) => {
        if (err) return console.error(err.message)
    } )
    return db
    },

    userCredentialsAuthenticate(db,unauthenticatedUser, res){
        const sql = `SELECT * FROM users WHERE email LIKE "${ unauthenticatedUser.credentials}" OR name  LIKE "${ unauthenticatedUser.credentials}"`

        db.all(sql,[],(err,row)=>{
            let erro
            if (row != 0){
                if (unauthenticatedUser.password == row[0].password){
                    console.log("100: Usuário autenticado")
                    renderController.renderPerfilPage(true, row, res, false)
                }   else {erro= "401: Senha não confere"}
            }       else{erro= '404: Usuário não encontrado'}
                    if (err){erro= '400:' + err}
                    if (erro){renderController.renderPerfilPage(false, row, res)}
    })},

    searchTagInDataBase(db, search, user, res){
        const sql = `SELECT ALL * FROM users WHERE tags LIKE '%${search}%'`
        
        db.all(sql,[],(err,row)=>{
            let erro
            let searchFound
            if (row != 0){
                searchFound = true
                renderController.renderSearchPage(user, searchFound, row, res) 
                erro = false
            }   else{
                searchFound = false
                erro= '404: Nenhuma entrada encontrada'
                if (err){erro= '400:' + err}   
                console.log
                renderController.renderSearchPage(user, searchFound, row, res) 
            }

        })
    }

}