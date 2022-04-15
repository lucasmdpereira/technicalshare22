const express = require('express')
const loginController = require('./controllers/loginController')
const searchController = require('./controllers/searchController')
const services = require('./services/services')
const multer = require('multer')
const path = require('path');

const routes = express.Router()

routes.use(express.json())

//Tela de login
routes.get('/', (req, res) => res.render("login"))

//perfil outros usuários
routes.get('/profissional/:user/:email', (req, res) => {

  let user = req.params.user
  let email = req.params.email

  res.render('profissional', {userName: `${user}`,userEmail: `${email}`})
})





//home
routes.post('/home/:user', async (req, res) => {

    res = await loginController.authenticate(req, res)
    if (res.continue == 'true') {
        console.log("100: Usuário autenticado")
        res.render('home', {userName: `${res.name}`, userEmail: `${res.email}`})
    }
    if (res.continue == 'false') {
        console.log("404: Not found")
        res.render('loginerror')
    }

})

//perfil próprio
routes.get('/perfil/:user/:email', (req, res) => {

  let user = req.params.user
  let email = req.params.email

  res.render('perfil', {userName: `${user}`,userEmail: `${email}`})
})

 routes.get('/home/:user/:email', async (req, res) => {
 
   let user = req.params.user
   let email = req.params.email

   res.render('home', {userName: `${user}`,userEmail: `${email}`})
 })

 routes.get('/perfilcomagenda/:user/:email', (req, res) => {
  let user = req.params.user
  let email = req.params.email

  res.render('perfilcomagenda', {userName: `${user}`,userEmail: `${email}`})

 })

//pesquisa
routes.post('/pesquisa/:userSearch/:userData', async (req,res) => {
  
  
  userData = JSON.parse(req.params.userData)
  
  res = await searchController.search(req, res)
 
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


    console.log(res.search.length)




res.render('catalogo', {id: `${id}`, name: `${name}`, tag: `${tag}`, office: `${office}`, userName: `${userData.name}`, userEmail: `${userData.email}`, picture: `${picture}`, email: `${email}`, gender: `${gender}`})
})

routes.get('/pesquisa/:userSearch/:userData', async (req,res) => {

  userData = JSON.parse(req.params.userData)
  res = await searchController.search(req, res)

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

res.render('catalogo', {id: `${id}`, name: `${name}`, tag: `${tag}`, office: `${office}`, userName: `${userData.name}`, userEmail: `${userData.email}`, picture: `${picture}`, email: `${email}`, gender: `${gender}`})
})



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

module.exports = routes