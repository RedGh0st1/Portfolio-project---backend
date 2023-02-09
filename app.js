// IMPORTS
const express = require("express")
const cors = require("cors")
const gameController = require("./controllers/gamesController")
//  CONIFGURATION
const app = express()

// MIDDLEWARE
app.use(cors())
app.use(express.json())
app.use("/games", gameController)

// ROUTES
app.get("/", (req, res) => {
  res.send(`Welcome to GigA`)
})

app.get("*", (req, res) => {
  res.status(404).send("Page Not Found!!")
})

// EXPORT
module.exports = app
