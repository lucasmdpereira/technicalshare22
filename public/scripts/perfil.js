const searchButton = document.querySelector('#send_form_search')

searchButton.addEventListener("click", formSearch)

function formSearch(){
    let userData = {}
    userData.name = document.querySelector('spam #nameUser').innerHTML
    userData.tags = document.querySelector('#tagsUser').innerHTML
 

    let userSearch = document.querySelector('#user_search').value
    //console.log(userSearch)
    let form = document.querySelector('#search_form')
    
    form.setAttribute('action', `/search/${userData.name}/${userSearch}/${userData.tags}`)

  }
