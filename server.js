const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
const cors = require('cors')

server.use(middlewares)
server.use(cors())

// Custom route for JSONP
server.get('/locations', (req, res) => {
  const callback = req.query.callback
  if (callback) {
    const data = router.db.get('locations').value()
    res.jsonp(data)
  } else {
    router(req, res)
  }
})

server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running')
})
