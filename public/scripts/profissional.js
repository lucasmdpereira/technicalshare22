document.querySelector('.others__button').addEventListener("click", openModal)

document.querySelector('#agenda1').addEventListener("click", agendar1)

document.querySelector('#agenda2').addEventListener("click", agendar2)

document.querySelector('#agenda3').addEventListener("click", agendar3)



function openModal(){
    document.querySelector('.modal-wrapper').classList.add("active")

    document.querySelector('.button__salvar').addEventListener("click", enviada)
}

function enviada(){
    alert('Mensagem enviada com sucesso')
}

function agendar1(){

    document.querySelector('#agenda1').innerHTML = 'Agendado'
    document.querySelector('#agenda1').classList.add("agendado")
}

function agendar2(){

    document.querySelector('#agenda2').innerHTML = 'Agendado'
    document.querySelector('#agenda2').classList.add("agendado")
}

function agendar3(){

    document.querySelector('#agenda3').innerHTML = 'Agendado'
    document.querySelector('#agenda3').classList.add("agendado")
}