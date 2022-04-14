const searchButton = document.querySelector('#send_form_button')
searchButton.addEventListener("click", sendFormSearch)

let userData = cacheUserInfo()

document.querySelector('#sangueLaranja').href = `/pesquisa/all/${userData}`




function sendFormSearch(){
    // const userData = cacheUserInfo()
    let userSearch = document.querySelector('#user_search').value
    if(!userSearch) userSearch  = 'all'
    console.log(userSearch)
    // let userData = {}
    // userData = cacheUserInfo()

    const form = document.querySelector('#search_form')
    console.log(form)
          // form.setAttribute('action', `/search/${userData.name}/${userSearch}/${userData.email}`)
          form.setAttribute('action', `/pesquisa/${userSearch}/${userData}`)
          form.setAttribute('method', 'POST')
  }

function cacheUserInfo(){
    let userData = {}
    let userName = document.querySelector('#userName').textContent
    let userEmail = document.querySelector('#userEmail').textContent
    userData.name = userName
    userData.email = userEmail

    userData = JSON.stringify(userData)
    return userData
}
