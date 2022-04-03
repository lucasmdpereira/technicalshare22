const sendButton = document.querySelector('#send_form_button')

sendButton.addEventListener("click", formLogin)

//form.setAttribute("action", `/:var`)
function formLogin(){
    const userCredentials = document.querySelector('#user_credentials').value
    const userPassword = document.querySelector('#user_password').value
    const form = document.querySelector('form')
    
    form.setAttribute('action', `/login/${userCredentials}`)

}