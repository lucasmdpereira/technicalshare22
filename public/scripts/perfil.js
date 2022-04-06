const searchButton = document.querySelector('#send_form_search')
searchButton.addEventListener("click", sendFormSearch)

function sendFormSearch(){
    const userData = cacheUserInfo()
    const userSearch = document.querySelector('#user_search').value
    
    const form = document.querySelector('#search_form')
    form.setAttribute('action', `/search/${userData.name}/${userSearch}/${userData.tags}`)
  }

  function cacheUserInfo(){
    let userData = {}
    userData.name = document.querySelector('#nameUser').innerHTML
    userData.tags = document.querySelector('#tagsUser').innerHTML
    return userData
  }
