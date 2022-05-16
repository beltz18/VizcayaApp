const express = require('express')
const app     = express()
const port    = 4000
const parser  = require('body-parser')
const jwt     = require('jsonwebtoken')

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`)
})

app.get('/', (req,res) => {
  res.send("hola mundo")
})