const sendButton = document.querySelector('#send_form_button')

sendButton.addEventListener("click", formLogin)

//form.setAttribute("action", `/:var`)
function formLogin(){
    const userCredentials = document.querySelector('#floatingInput').value
    console.log(userCredentials)
    const form = document.querySelector('#credentials_form')
    
    form.setAttribute('action', `/perfil/${userCredentials}`)

}