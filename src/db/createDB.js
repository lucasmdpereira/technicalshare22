//index.js
(async () => {
    const database = require('./dbUsers');
    const usersData = require('./usersData');
 
    try {
        const resultado = await database.sync();
        //console.log(resultado);

        // const names = ['Pedro Ayuda', 'Juninho Jr.', 'Alf Deet', 'Roberta Hermes', 'Michael Scott'];
        // const emails = ['pedro@ayuda', 'juninho@jr', 'alf@deet', 'roberta@hermes', 'michael@scott'];
        // const passwords = ['pedro', 'juninho', 'alf', 'roberta', 'michael'];
        // const tags = ['node.js;scrum master;java', 'node.js;scrum master;javascript ', 'node.js;scrum master;java ',  'node.js;scrum master;javascript ', 'po']

        const name = "Lucas Pereira"
        const gender = "Ele/Dele"
        const tag = "node.js;javascript;SQLite;"
        const email = "lucasmdpereira@gmail.com"
        const picture = "lucasmdpereira@gmail.com-profilepicture"
        const market_saude = false
        const market_industria = false
        const market_publico = false
        const market_banking = false
        const market_varejo = false
        const market_educacao = true
        const market_finance = false
        const market_seguros = false
        const office = "Futuro Full Stack FCamara"
        const password = '0000'
        const bio = "Professor assistente no Centro Universitário UNA de Contagem e Betim. Graduado em Engenharia Elétrica pela Pontifícia Universidade Católica de Minas Gerais (PUCMINAS - 2011). Mestrado pelo Centro Federal de Educação Tecnológica de Minas Gerais (CEFET-MG - 2016). Bolsista pela Coordenação de Aperfeiçoamento de Pessoal de Nível Superior (CAPES) com dedicação exclusiva. Possui experiência no ensino das disciplinas: Máquinas Elétricas; Acionamentos Elétricos; Circuitos Elétricos; Eletrônica Analógica e Digital; Instalações Elétricas Residenciais, Comerciais e Industriais; Desenho Técnico; Conversão de energia; Automação industrial; Instrumentação e controle de processos; Sistema elétrico de potência I e II; Transmissão e distribuição de energia elétrica; Orientação a trabalhos de conclusão de curso. Trabalha com os softwares e linguagens: C, JavaScripr, Matrix Laboratory (MATLAB), Advanced Design System (ADS - Kesight), Computer Simulation Technology (CST) e softwares de análise de circuitos eletrônicos."
        const insertData = await usersData.create({
            name: name,
            gender: gender,
            tag: tag,
            email: email,
            picture: picture,
            market_saude: market_saude,
            market_industria: market_industria,
            market_publico: market_publico,
            market_banking:  market_banking,
            market_varejo: market_varejo,
            market_educacao: market_educacao,
            market_finance: market_finance,
            market_seguros: market_seguros,
            office: office,
            bio: bio,
            password: password,
            picture: 0
        })
        //console.log(insertData)
    } catch (error) {
        console.log(error);
    }






})();