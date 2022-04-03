const sendButton = document.querySelector('#send_form_button')

console.log(sendButton)

sendButton.addEventListener("click", formLogin)

//form.setAttribute("action", `/:var`)
function formLogin(){
    const userCredentials = document.querySelector('#user_credentials').value
    const form = document.querySelector('#credentials_form')
    
    form.setAttribute('action', `/login/${userCredentials}`)

}