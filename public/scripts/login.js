const sendButton = document.querySelector('#send_form_button')
sendButton.addEventListener("click", sendFormLogin)

function sendFormLogin(){
    const userCredentials = document.querySelector('#floatingInput').value
        
    const form = document.querySelector('#credentials_form')
    form.setAttribute('action', `/perfil/${userCredentials}`)
}