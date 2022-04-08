const sendButton = document.querySelector('#sendSubscribe')
sendButton.addEventListener("click", sendFormSubscribe)



function sendFormSubscribe(){
    const subscribeName = document.querySelector('#subscribeName').value
    const subscribeEmail = document.querySelector('#subscribeEmail').value
    const subscribeTags = document.querySelector('#subscribeTags').value
    const subscribePassword = document.querySelector('#subscribePassword').value

    let subscribe = JSON.stringify({name:subscribeName, email:subscribeEmail,tags:subscribeTags,password:subscribePassword})

    //subscribe = JSON.parse(subscribe)
    const   form = document.querySelector('#subscribeForm')
    form.setAttribute('action', `/subscribe/dataSubscribe`)
    form.setAttribute('method', 'POST')   
}

