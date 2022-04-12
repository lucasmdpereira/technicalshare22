const sendButton = document.querySelector('#sendSubscribe')
sendButton.addEventListener("click", sendFormSubscribe)



function sendFormSubscribe(){
    const subscribeFirstName = document.querySelector('#subscribeFirstName').value
    const subscribeLastName = document.querySelector('#subscribeLastName').value
    const subscribeEmail = document.querySelector('#subscribeEmail').value
    const subscribeTags = document.querySelector('#subscribeTags').value
    const subscribePassword = document.querySelector('#subscribePassword').value

    const subscribeName = `${subscribeFirstName} ${subscribeLastName}`
    const   form = document.querySelector('#subscribeForm')
    form.setAttribute('action', `/subscribe/dataSubscribe`)
    form.setAttribute('method', 'POST')   
}

