const sendButton = document.querySelector('#send_form_button')
sendButton.addEventListener("click", sendFormLogin)

function sendFormLogin(){
    let userCredentials = document.querySelector('#floatingInput').value
    if(!userCredentials) userCredentials  = 'blank'

    let userPassword = document.querySelector('#floatingPassword').value
    if(!userPassword) userPassword  = 'blank'

    const   form = document.querySelector('#credentials_form')
            form.setAttribute('action', `/login/${userCredentials}`)
            form.setAttribute('method', 'POST')
}