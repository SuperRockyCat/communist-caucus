const express = require("express");
const app = express();
const router = express.Router();
const dotenv = require("dotenv")
const host = process.env.expressHost || 'localhost';
const port = process.env.expressPort || 8080;
const path = process.env.expressPath || '/express'

if (process.env.ENVIRONMENT !== "production") {
    dotenv.config();
  }  

router.get("/test", (res, req, next) => {
    res.send("It Works!");
})

app.listen(port, host);