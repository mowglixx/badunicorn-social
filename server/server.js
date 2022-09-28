require("./src/db/connection") // DB connection initialiser 
const express = require("express") // The one and only
const cors = require("cors") // Cross-Origin Resource Sharing

// Route console logging
const morgan = require('morgan')

// routers
const authRouter = require("./src/routes/auth/routes");
// const profileRouter = require("./src/routes/profile/routes");
// const postRouter = require('./src/routes/')

// setup express app instance
const app = express()

const CONFIG = {
  endpoint: {
    protocol: process.env.ENDPOINT_PROTOCOL || 'http',
    uri: process.env.ENDPOINT_URI || 'localhost',
    port: process.env.ENDPOINT_PORT || 3001,
  }
}

// middlewares
app.use(cors()) // allow cross origin
app.use(express.json()) // translate JSON automatically

// log the http method, route and status 
// with the response time when a route is 
// visited to the console
app.use(morgan(':method :url :status - :response-time ms'))

///////////////////////////////
// Routes                    //
/////////////////////////////// 
app.use('/auth', authRouter)

// plans for the future
// app.use('/profile', profileRouter);
// app.use('/messenger', messengerRouter);
// img / asset router?
// app.use('/asset', assetRouter);

// API status route
app.get("/status", (req, res) => {
  res.status(200).send({
    message: "API is working"
  });
});

app.get('*', (req,res) => {
  res.status(404).send('<style>*{ background: #000;}</style><a href="https://http.cat/404"><img title="404 Error - Not Found" src="https://http.cat/404" /></a>')
})

// let the app listen on the defined port and 
app.listen(CONFIG.endpoint.port, () => {
  console.log(`Listening at ${CONFIG.endpoint.protocol}://${CONFIG.endpoint.uri}:${CONFIG.endpoint.port}`);
});