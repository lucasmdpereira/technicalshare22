(async () => {
    const database = require('./dbQuestions');
    const questionsData = require('./questionsData');


    let teste1 = [{
            para: "pedro@ayuda",
            de: "juninho@jr",
            texto: "Pergunta 01"
        },
        {
            para: "juninho@jr",
            de: "pedro@ayuda",
            texto: "Resposta 01"
        }
    ]

    let teste2 = [{
            para: "pedro@ayuda",
            de: "roberta@hermes",
            texto: "Pergunta 02"
        },
        {
            para: "roberta@hermes",
            de: "pedro@ayuda",
            texto: "Resposta 02"
        }
    ]

    let teste3 = [{
            para: "pedro@ayuda",
            de: "alf@deet",
            texto: "Pergunta 03"
        },
        {
            para: "alf@deet",
            de: "pedro@ayuda",
            texto: "Resposta 03"
        }
    ]

    teste1 = JSON.stringify(teste1)
    teste2 = JSON.stringify(teste2)
    teste3 = JSON.stringify(teste3)



    try {
        const resultado = await database.sync();
        //console.log(resultado);

        const quemFoiPerguntado = ['pedro@ayuda', 'pedro@ayuda', 'pedro@ayuda']
        const quemPerguntou = ['juninho@jr',
            'roberta@hermes',
            'alf@deet'
        ]
        const historico = [`${teste1}`,
            `${teste2}`,
            `${teste3}`
        ]


        for (let i = 0; i < quemFoiPerguntado.length; i++) {
            const insertData = await questionsData.create({
                quemFoiPerguntado: quemFoiPerguntado[i],
                quemPerguntou: quemPerguntou[i],
                historico: historico[i]
            })
        }
        //console.log(insertData)
    } catch (error) {
        console.log(error);
    }






})();