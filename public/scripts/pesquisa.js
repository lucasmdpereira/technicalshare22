const searchButton = document.querySelector('#send_form_button')
searchButton.addEventListener("click", sendFormSearch)

function sendFormSearch(){
    // const userData = cacheUserInfo()
    let userSearch = document.querySelector('#user_search').value
    if(!userSearch) userSearch  = 'all'
    console.log(userSearch)
    // let userData = {}
    let userData = {}
    let userName = document.querySelector('#userName').textContent
    let userEmail = document.querySelector('#userEmail').textContent

    userData.name = userName
    userData.email = userEmail

    userData = JSON.stringify(userData)

    const form = document.querySelector('#search_form')
    console.log(form)
          // form.setAttribute('action', `/search/${userData.name}/${userSearch}/${userData.email}`)
          form.setAttribute('action', `/pesquisa/${userSearch}/${userData}`)
          form.setAttribute('method', 'POST')
  }

  // function cacheUserInfo(){
  //   let userData = {}
  //   userData.name = document.querySelector('#nameUser').innerHTML
  //   userData.email = document.querySelector('#emailUser').innerHTML
  //   // console.log(userData)
  //   return userData
  // }
