const express = require('express')
const app = express()
require("./db")

app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    return res.send(`Welcome to the beginning of nothingness`)
})

app.listen(3300, () => {
    console.log(`Example app listening on port 3300`)
})