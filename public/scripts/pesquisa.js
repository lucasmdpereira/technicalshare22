const searchButton = document.querySelector('#send_form_button')
searchButton.addEventListener("click", sendFormSearch)

function sendFormSearch(){
    // const userData = cacheUserInfo()
    let userSearch = document.querySelector('#user_search').value
    if(!userSearch) userSearch  = 'all'
    console.log(userSearch)
  
    const form = document.querySelector('#search_form')
    console.log(form)
          // form.setAttribute('action', `/search/${userData.name}/${userSearch}/${userData.email}`)
          form.setAttribute('action', `/pesquisa/${userSearch}`)
          form.setAttribute('method', 'POST')
  }
