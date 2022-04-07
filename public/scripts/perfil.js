const searchButton = document.querySelector('#send_form_search')
searchButton.addEventListener("click", sendFormSearch)

function sendFormSearch(){
    const userData = cacheUserInfo()
    let userSearch = document.querySelector('#user_search').value
    if(!userSearch) userSearch  = 'all'
  
    const form = document.querySelector('#search_form')
          form.setAttribute('action', `/search/${userData.name}/${userSearch}/${userData.tags}`)
          form.setAttribute('method', 'POST')
  }

  function cacheUserInfo(){
    let userData = {}
    userData.name = document.querySelector('#nameUser').innerHTML
    userData.tags = document.querySelector('#tagsUser').innerHTML
    return userData
  }
