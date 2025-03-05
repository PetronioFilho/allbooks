const bodyParser = require('body-parser')
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('./src/data/database.json')
const publicRoutes = require('./routes/publicRoutes')
const authenticationMiddleware = require('./middleware/authenticationMiddleware')


server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(jsonServer.defaults());

server.use('/public', publicRoutes) //rotas na porta 8000


server.use(/^(?!\/(public|livros|autores|categorias)).*$/, authenticationMiddleware);

server.use(router) //rotas na prota 3000


server.listen(8000, () => {
<<<<<<< HEAD
  console.log("Teste proteção à Branch main http://localhost:8000")
=======
  console.log("Testando CI no Github http://localhost:8000")
>>>>>>> main
})

//Este comentário é apenas para treinar Integração Contínua
//Este comentário é para o exercício de CI
//Vamos testar a proteção à branch main
