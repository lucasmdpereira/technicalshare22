const sendButton = document.querySelector('#send_form_search')

sendButton.addEventListener("click", formLogin)

function formLogin(){
    let userSearch = document.querySelector('#user_search').value
    console.log(userSearch)
    let form = document.querySelector('#search_form')
    
    form.setAttribute('action', `/search/${userSearch}`)

  }