let teste = 
[
    {
        para: "pedro@ayuda",
        de: "juninho@jr",
        texto: "Você já utilizou o express?"
    },
    {
        para: "juninho@jr",
        de: "pedro@ayuda",
        texto: "Um pouco, qual a dúvida?"
    }
]


console.log(teste)

let testestring = JSON.stringify(teste)
console.log(testestring)

console.log(JSON.parse(testestring))

