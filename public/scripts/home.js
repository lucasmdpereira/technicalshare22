document.querySelector('#pop1').addEventListener("click", openModalResposta)

document.querySelector('#pop2').addEventListener("click", openModalPergunta)

document.querySelector('#pop3').addEventListener("click", openModalPergunta)

document.querySelector('.button__enviar').addEventListener("click", responderPergunta)

document.querySelector('#pop4').addEventListener("click", openModalResposta)

document.querySelector('.button__cancelar').addEventListener("click", closeModal)

console.log(document.querySelector('.button__cancelar'))


function openModalPergunta(){
    document.querySelector('.modal-wrapper__pergunta').classList.add("active")
}

function openModalResposta(){
    
    document.querySelector('.modal-wrapper__pergunta').classList.add("active")
    document.querySelector('.resposta__body ').classList.add("active")
}

function responderPergunta(){

    document.querySelector('.pergunta__header p').innerHTML = 'Sua resposta - Enviada 12/04'

    document.querySelector('.resposta__body ').classList.add("active")
}



// document.querySelector('.button__cancelar').addEventListener("click", closeModal)

// function openModal(){
//     document.querySelector('.modal-wrapper').classList.add("active")
// }

function closeModal(){
    document.querySelector('.modal-wrapper__pergunta').classList.remove("active")

    document.querySelector('.resposta__body ').classList.remove("active")
}
