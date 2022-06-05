const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use((req, res, next) => {
    //Ex.: Se a requisição for do método DELETE para "http://localhost:9000/books?_cleanup=true", entrará no if
    if(req.method === 'DELETE' && req.query['_cleanup']){
        const db = router.db;
        db.set('books', []).write() //Irá sobrescrever o valor de "books" para um array vazio.
        res.sendStatus(204)
        
    } else {
        next();
    }
})

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
// server.use(jsonServer.bodyParser)
// server.use((req, res, next) => {
//   if (req.method === 'POST') {
//     req.body.createdAt = Date.now()
//   }
//   // Continue to JSON Server router
//   next()
// })

// Use default router
server.use(router)

server.listen(9000, () => {
  console.log('JSON Server is running')
})