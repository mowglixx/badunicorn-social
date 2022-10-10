require("./src/db/connection") // DB connection initialiser 
const express = require("express") // The one and only

// Helpers
const handleError = require('./src/helpers/errorHandler.js')

// Route console logging
const cors = require("cors") // Cross-Origin Resource Sharing
const morgan = require('morgan')
const cookieParser = require('cookie-parser')

// routers
const authRouter = require("./src/routes/auth/routes")
// const profileRouter = require("./src/routes/profile/routes")
// const postRouter = require('./src/routes/')

// setup express app instance
const app = express()

const CONFIG = {
  endpoint: {
    protocol: process.env?.ENDPOINT_PROTOCOL || 'http',
    uri: process.env?.ENDPOINT_URI || 'localhost',
    port: process.env?.ENDPOINT_PORT || 3001,
  }
}

// middlewares
app.use(cors()) // allow cross origin
app.use(express.json()) // translate JSON automatically
app.use(cookieParser()) // allow cookies to be sent

// log the http method, route and status 
// with the response time when a route is 
// visited to the console
app.use(morgan('":url" [:method] :status'))

///////////////////////////////
// Routes                    //
/////////////////////////////// 
app.use('/auth', authRouter)

// plans for the future
// app.use('/profile', profileRouter)
// app.use('/messenger', messengerRouter)
// img / asset router?
// app.use('/asset', assetRouter)

// API status route
app.get(["/", "/health", "/status"], async (req, res, next) => {
  const apiHealth = {
    health: 'OK',
    routes: {
      '/auth': await(await fetch('http://127.0.0.1:3001/auth', {method: 'POST'})).status != 404 ? 'OK' : 'FAIL',
      '/auth/list': await (await fetch('http://127.0.0.1:3001/auth/list')).status != 404 ? 'OK' : 'FAIL',
    }
  }
  if (apiHealth) {
    res.status(200).send(apiHealth)
  }
})

app.get('*', (req, res, next) => {
  throw handleError(404, `'${req.path}' Not Found`)
})

// error handling
app.use((e, req, res, next) => {
  res.status(e.statusCode || 500).send(e)
})

// let the app listen on the defined port and 
app.listen(CONFIG.endpoint.port, () => {
  console.log(`Listening at ${CONFIG.endpoint.protocol}://${CONFIG.endpoint.uri}:${CONFIG.endpoint.port}`)
})