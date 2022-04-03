const searchButton = document.querySelector('#send_form_search')

searchButton.addEventListener("click", formSearch)

function formSearch(){
    let userName = document.querySelector('#nameUser').innerHTML
    let userSearch = document.querySelector('#user_search').value
    console.log(userSearch)
    let form = document.querySelector('#search_form')
    
    form.setAttribute('action', `/search/${userName}/${userSearch}`)

  }

