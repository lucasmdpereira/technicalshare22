module.exports = {
    renderPerfilPage(userAndPasswordCorrect, row, res){
        //console.log(userAndPasswordCorrect)
        if (userAndPasswordCorrect == true){
            res.render('perfil', {page: 'user_perfil', user: row[0]})
            } else {
            res.render('loginerror')
        }
    },
    renderSearchPage(user, searchFound, row, res){
        if (searchFound == true){
            res.render('perfil', {page: 'search', user: user, data: row, statusMsg: 'Usuário(s) encontrado(s):'})
        }   else{
            res.render('perfil', {page: 'search', user: user, data: row, statusMsg: 'Nenhum usuário encontrado =('})
        }
    }

}
