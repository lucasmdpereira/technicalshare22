const express = require('express')
const loginController = require('./controllers/loginController')
const searchController = require('./controllers/searchController')
const services = require('./services/services')
const multer = require('multer')
const path = require('path');
const questionsController = require('./controllers/questionsController')
const routes = express.Router()

//middleware
//envia pelo body da msg
routes.use(express.json())



//Tela de login
routes.get('/', (req, res) => res.render("login"))

//perfil
routes.post('/home/:user', async (req, res) => {
    //console.log("Requisição de login:")
    //console.log(req)
    res = await loginController.authenticate(req, res)

    req.user = req.params.user
    let ultimasPerguntas = await questionsController.ultimasPerguntas(req, res)
 
    console.log('INFO*** routes =>')
    console.log(ultimasPerguntas)
    
    let idQuestion = ultimasPerguntas.idQuestion
    let quemPerguntou = ultimasPerguntas.quemPerguntou
    let historico = ultimasPerguntas.historico
  


    //console.log(reqhistorico)

    if (res.continue == 'true') {
        console.log("100: Usuário autenticado")
        res.render('home', {userName: `${res.name}`, userEmail: `${res.email}`, ultimasPerguntas: `${ultimasPerguntas}`,idQuestion: `${idQuestion}`, quemPerguntou:  `${quemPerguntou}`,historico: `${historico}`})
    }
    if (res.continue == 'false') {
        console.log("404: Not found")
        res.render('loginerror')
    }
})
 routes.get('/home/:user/:email', async (req, res) => {
   console.log(req)
   let user = req.params.user
   let email = req.params.email

   res.render('home', {userName: `${user}`,userEmail: `${email}`})
 })


//pesquisa
routes.post('/pesquisa/:userSearch/:userData', async (req,res) => {
  //console.log(req)
  userData = JSON.parse(req.params.userData)
  //console.log(userData)
  res = await searchController.search(req, res)

  
  //console.log(res.search)
  let id = []
  let name = []
  let tag = []
  let office = []
  let picture = []
  let email = []
  let gender = []
  for (let i = 0; i < res.search.length; i++){
    id[i] =  res.search[i].id
    name[i] = res.search[i].name
    tag[i] = res.search[i].tag
    office[i] = res.search[i].office
    picture[i] = res.search[i].picture
    email[i] = res.search[i].email
    gender[i] = res.search[i].gender
  }

  //console.log(id)
  //console.log(name)
  // console.log(tag)
  //console.log(office)
  //console.log(picture)

res.render('catalogo', {id: `${id}`, name: `${name}`, tag: `${tag}`, office: `${office}`, userName: `${userData.name}`, userEmail: `${userData.email}`, picture: `${picture}`, email: `${email}`, gender: `${gender}`})
})

routes.get('/pesquisa/:userSearch/:userData', async (req,res) => {
  //console.log(req)
  userData = JSON.parse(req.params.userData)
  //console.log(userData)
  res = await searchController.search(req, res)

  
  //console.log(res.search)
  let id = []
  let name = []
  let tag = []
  let office = []
  let picture = []
  let email = []
  let gender = []
  for (let i = 0; i < res.search.length; i++){
    id[i] =  res.search[i].id
    name[i] = res.search[i].name
    tag[i] = res.search[i].tag
    office[i] = res.search[i].office
    picture[i] = res.search[i].picture
    email[i] = res.search[i].email
    gender[i] = res.search[i].gender
  }

  //console.log(id)
  //console.log(name)
  // console.log(tag)
  //console.log(office)
  //console.log(picture)

res.render('catalogo', {id: `${id}`, name: `${name}`, tag: `${tag}`, office: `${office}`, userName: `${userData.name}`, userEmail: `${userData.email}`, picture: `${picture}`, email: `${email}`, gender: `${gender}`})
})

routes.get('/question/:userData', async (req, res) => {
  req.user = req.params.userData
  res = await questionsController.myQuestions(req, res)
  console.log(res)
})


//subscribe
routes.get('/subscribe', (req, res) => res.render("subscribe"))

routes.post('/subscribe/:dataSubscribe', (req, res) => {
  req = JSON.parse(req.params.dataSubscribe)
  //console.log(req)
  services.addUser(req, res)
})


routes.get('/perfil/:user', (req, res) => res.render("perfil"))

//routes.get('/', (req, res) => res.render('uploadFoto'));

// Set The Storage Engine
const storage = multer.diskStorage({
    destination: './public/uploads/',
    filename: function(req, file, cb){
      console.log(file.originalname)
      cb(null,'profilepicture' + '-' + path.extname(file.originalname));
    }
  });

routes.post('/upload', (req, res) => {
    upload(req, res, (err) => {
      if(err){
        res.render('uploadFoto', {
          msg: err
        });
      } else {
        if(req.file == undefined){
          res.render('uploadFoto', {
            msg: 'Error: No File Selected!'
          });
        } else {
          res.render('uploadFoto', {
            msg: 'File Uploaded!',
            file: `uploads/${req.file.filename}`
          });
        }
      }
    });
  });

    // Init Upload
    const upload = multer({
        storage: storage,
        limits:{fileSize: 1000000},
        fileFilter: function(req, file, cb){
          checkFileType(file, cb);
        }
      }).single('myImage');
      
      // Check File Type
      function checkFileType(file, cb){
        // Allowed ext
        const filetypes = /jpeg|jpg|png|gif/;
        // Check ext
        const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
        // Check mime
        const mimetype = filetypes.test(file.mimetype);
      
        if(mimetype && extname){
          return cb(null,true);
        } else {
          cb('Error: Images Only!');
        }
      }

//GET
// routes.get('/', (req, res) => res.send("Hello World!"))
// POST
// routes.post('/', (req, res) => res.send(req.body))
// PUT
// let author = "Lucas Pereira"
// routes.put('/', (req, res) => {
//     author = req.body.nome
//     console.log(req.body.nome)
//     res.send(author)
// })
// routes.get('/', (req, res) => res.send(author))
//DELETE
// let author = "Lucas"
// routes.delete('/:identificador', (req, res) => {
//     author = ""
//     res.send("apagado!")
// })
// routes.get('/:identificador', (req, res) => res.send(author))




module.exports = routes