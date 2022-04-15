let cards = document.querySelectorAll('.homecard')

for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", (event) => handleClick(event))
}

function handleClick(event) {
    console.log(event.path[1])
}
