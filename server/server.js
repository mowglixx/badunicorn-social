require("./src/db/connection");
const morgan = require('morgan')
const express = require("express");
const cors = require("cors");
const authRouter = require("./src/auth/routes");
const profileRouter = require("./src/routes/profile/routes");
const postRouter = require('./src/routes/')
const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
app.use('/auth', authRouter);
// app.use('/profile', profileRouter);
// app.use('/messenger', messengerRouter);
// img / asset router?
// app.use('/asset', assetRouter);

app.get("/status", (req, res) => {
  res.status(200).send({ 
    message: "API is working" 
  });
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});