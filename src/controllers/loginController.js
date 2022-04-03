const sqlite3 = require('sqlite3').verbose();
//const express = require('express');
const path = require('path')

module.exports = {
    authenticate(req, res){
        let sql
        
        const userCredentials = req.params.userCredentials
        const userPassword = req.body.userPassword

        //console.log(req.params.userCredentials)

        //connect to DB
        const db = new sqlite3.Database(path.join(__dirname, '..', 'db', 'users.db'), sqlite3.OPEN_READWRITE, (err) => {
            if (err) return console.error(err.message)
        } )

        console.log('Usuário: ' + userCredentials)
        console.log('Senha: ' + userPassword)

        sql = `SELECT * FROM users WHERE email LIKE "${userCredentials}" OR name LIKE "${userCredentials}"`    
        db.all(sql,[],(err,row)=>{
        if (err) return console.error(err.message)
        if (row == 0) return res.status(404).json({erro: 'Usuário não encontrado, pro favor contacte o administrador do sistema'}) //aparecer pro usuário

        if (userPassword == row[0].password){
            console.log('Login válido')
            //res.use(`/perfil/${row[0].name}`, redirect)
            res.render('perfil', {user: row[0].name})
            } else {
            console.error('Login inválido')
        }

})

     }
 }