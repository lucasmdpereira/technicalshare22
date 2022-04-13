const express = require('express')
const loginController = require('./controllers/loginController')
const searchController = require('./controllers/searchController')
const services = require('./services/services')
const multer = require('multer')
const path = require('path');

const routes = express.Router()

//middleware
//envia pelo body da msg
routes.use(express.json())



//Tela de login
routes.get('/', (req, res) => res.render("login"))

//perfil
routes.post('/home/:user', async (req, res) => {
    //console.log("Requisição de login:")
    console.log(req)
    res = await loginController.authenticate(req, res)
    //console.log(res.continue)
    console.log(res)
    if (res.continue == 'true') {
        console.log("100: Usuário autenticado")
        res.render('home', {userName: `${res.name}`, userEmail: `${res.email}`})
    }
    if (res.continue == 'false') {
        console.log("404: Not found")
        res.render('loginerror')
    }
})
//  routes.get('/home/:user', async (req, res) => {
//    let user = req.params.user
//    res.render('home', {userName: `${user}`})
//  })


//pesquisa
routes.post('/pesquisa/:userSearch', async (req,res) => {
  console.log(req)
  res = await searchController.search(req, res)

  
  //console.log(res.search)
  let id = []
  let name = []
  let tag = []
  let office = []
  for (let i = 0; i < res.search.length; i++){
    id[i] =  res.search[i].id
    name[i] = res.search[i].name
    tag[i] = res.search[i].tag
    office[i] = res.search[i].office
  }

  // console.log(id)
  //console.log(name)
  // console.log(tag)
  // console.log(office)

res.render('catalogo', {id: `${id}`, name: `${name}`, tag: `${tag}`, office: `${office}`})
})

//subscribe
routes.get('/subscribe', (req, res) => res.render("subscribe"))

routes.post('/subscribe/:dataSubscribe', (req, res) => {
  req = JSON.parse(req.params.dataSubscribe)
  //console.log(req)
  services.addUser(req, res)
})


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