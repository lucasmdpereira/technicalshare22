<h2>Programa de formação FCamara - Season 3 - Abril/2022</h2>

<p>Esse repositório contém o MVP desenvolvido durante os dias 01/04/2022 e 15/04/2022 para o processo seletivo da FCamara. A aplicação é um MVP desenvolvido por candidatos a trainee e pode conter bugs 🪲 e necessidade de inclusão de novas features 📅</p>

<p>TechnicalShare é uma ferramenta que permite profissionais da FCamara se conectarem e trocarem experiências. Utilizando uma barra de pesquisa inteligente é possível filtrar, encontrar e se conectar a profissionais de diferentes áreas  e níveis de conhecimento</p>

<p>Para o MVP somente a pesquisa está 100% disponível e funcional, o restante da aplicação roda apenas no Frontend para validação</p>

<h3>Sumário<h3>
🛠️ Tecnologias e ferramentas<br>
💾 Node Modules<br>
🏆 Conquistas e desafios encontrados<br>
⚙️ Como executar<br>
📅🪲 Features e BugFix<br>


<h3>🛠️ Tecnologias e ferramentas</h3>
<ul>
  <li>VS Code;</li>
  <li>GitFlow;</li>
  <li>HTML;</li>
  <li>CSS;</li>
  <li>JavaScript;</li>
  <li>Node.js;</li>
  <li>SQlite;</li>
  <li>WSL;</li>
  <li>Ubuntu Linux;</li>
  <li>RegEx;</li>
  <li>AWS EC2;</li>
  <li>BootStrap.</li>
</ul> 

<h3>💾 Node Modules</h3>
<ul>
  <li>ejs;</li>
  <li>express;</li>
  <li>sequelize;</li>
  <li>sqlite3;</li>
  <li>path;</li>
  <li>multer(não implementado);</li>
  <li>nodemon (devDependencie).</li>
</ul> 

<h3>🏆 Conquistas e desafios encontrados</h3>
<ul>
  <li>Frontend e Backend desenvolvido ao longo de 15 dias</li>
  <li>Uso de metodologias ágeis e sprints</li>
  <li>Frontend finalizado</li>
  <li>Backend para barra de pesquisa inteligente finalizado. A pesquisa é capaz de encontrar nomes, cargos ou tag, inclusive pesquisando mais de um termo. Por ex: ```node moraes ux``` ira localizar todas as pessoas que possuem node como tag, mais todas as pessoas que tenham moraes no nome acrescida de todas as pessoas que possuam o cargo UX.</li>
</ul>

<h3>⚙️ Como executar</h3>
<p>Primeiro certifique-se de utilizar a versão 16.14.2 ou superior do Node.js</p>

<ul>
  <li> $ git clone https://github.com/lucasmdpereira/technicalshare22.git</li>
  <li> $ cd technicalshare22</li>
  <li> $ npm run install</li>
  <li> $ npm run dbinit</li>
  <li> $ npm start</li>
</ul>

<p> Acesse localhost:4000 no navegador, e faça login com um dos usuários pré-cadastrados conforme figura abaixo:</p>

![image](https://user-images.githubusercontent.com/73071973/163655739-37aac0b6-d1cb-4597-b3a1-085510c87154.png)

<h3>📅 Features e 🪲 BugFix</h3>
<ul>
  <li>🪲 Para alguns dispositivos, a barra lateral não completa até o final da tela, isso ocorre principalmente em celulares</li>
  <li>🪲 Para alguns dispositivos, o modal de enviar mensagem não respeita as margens estabelecidas, isso ocorre principalmente com dispositivos da apple utilizando o safari</li>
  <li>📅 Testes unitários automatizados utilizando JEST </li>
  <li>📅 A aplicação não está responsiva para celulares, embora seja possível usar pois todas as unidades são unidades relativas (rem) </li>
  <li>📅 Desenvolver o Frontend em VUE ou React para facilitar a troca de informações entre backend e frontend </li>
  <li>📅 Testes de integração utilizando JavaScrip</li>
  <li>📅 Montar as páginas de Perfil do usuário e demais usuários dinâmicamente, buscando os dados no banco de dados</li>
  <li>📅 Trocar o banco de dados para PostgreSQL🐘 serveless</li>
</ul>


<h3>📝 # Licenca</h3>
<p>Este projeto está sob a licença MIT. Veja o arquivo <a href="https://github.com/lucasmdpereira/nlwtogether2020_origin/blob/main/LICENSE.md"> LICENSE </a> para mais detalhes.<p>
