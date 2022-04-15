const services = require('../services/services')

module.exports = {
    async ultimasPerguntas(req, res) {
        await services.ultimasPerguntas(req, res)

        let idQuestion = []
        let quemPerguntou = []
        let historico = []

        for (let i = 0; i < res.perguntas.length; i++) {
            idQuestion[i] = res.perguntas[i].idQuestion
            quemPerguntou[i] = res.perguntas[i].quemPerguntou
            historico[i] = res.perguntas[i].historico
        }

        res.quemPerguntou = quemPerguntou
        res.historico = historico
        res.idQuestion = idQuestion

        return res
    }
}