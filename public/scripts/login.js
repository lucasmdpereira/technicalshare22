const sendButton = document.querySelector('#send_form_button')
sendButton.addEventListener("click", sendFormLogin)

function sendFormLogin() {
    let userCredentials = document.querySelector('#floatingInput').value

    const form = document.querySelector('#credentials_form')
    console.log(form)
    form.setAttribute('action', `/home/${userCredentials}`)
    form.setAttribute('method', 'POST')
}