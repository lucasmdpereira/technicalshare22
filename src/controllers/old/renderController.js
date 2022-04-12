module.exports = {
    renderPerfilPage(userAndPasswordCorrect, dbUserCredentials, res){
        //console.log(userAndPasswordCorrect)
        if (userAndPasswordCorrect == true){
            res.render('perfil', {page: 'user_perfil', user: dbUserCredentials})
            } else {
            res.render('loginerror')
        }
    },
    renderSearchPage(user, searchFound, search, res){
        if (searchFound == true){
            res.render('perfil', {page: 'search', user: user, data: search, statusMsg: 'Usuário(s) encontrado(s):'})
        }   else{
            res.render('perfil', {page: 'search', user: user, data: search, statusMsg: 'Nenhum usuário encontrado => Nesse caso a resposta é 42 =D'})
        }
    }

}
