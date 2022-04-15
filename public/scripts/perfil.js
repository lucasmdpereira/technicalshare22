document.querySelector('.pop__agendar__incluir').addEventListener("click", openModal)

document.querySelector('.button__cancelar').addEventListener("click", closeModal)

function openModal(){
    document.querySelector('.modal-wrapper').classList.add("active")
}

function closeModal(){
    document.querySelector('.modal-wrapper').classList.remove("active")
}

