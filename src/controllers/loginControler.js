const sqlite3 = require('sqlite3').verbose();
const path = require('path')

module.exports = {
    authenticate(req, res){
        let sql
        const userCredentials = req.params.userCredentials
        const userPassword = req.body.userPassword

        //connect to DB
        const db = new sqlite3.Database(path.join(__dirname, '..', 'db', 'users.db'), sqlite3.OPEN_READWRITE, (err) => {
            if (err) return console.error(err.message)
        } )

        console.log(userCredentials)
        console.log(userPassword)

        sql = `SELECT * FROM users WHERE email LIKE "${userCredentials}" OR name LIKE "${userCredentials}"`    
        db.all(sql,[],(err,row)=>{
        if (err) return console.error(err.message)
        if (row == 0) return console.error('Usuário não encontrado, pro favor contacte o administrador do sistema')

        if (userPassword == row[0].password){
            console.log('Login válido')
            res.render('perfil', {user: row[0].name})
            } else {
            console.error('Login inválido')
        }

})

     }
 }