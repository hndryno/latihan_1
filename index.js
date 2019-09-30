const express = require('express')
const app = express()
require("./db")

const index_routes = require('./routes/index')
const book_routes = require('./routes/book')
const user = require('./routes/user')

app.use(express.urlencoded({ extended: true }))

// app.get('/', (req, res) => {
//     return res.send(`Welcome to the beginning of nothingness`)
// })

app.use('/index', index_routes)
app.use('/books', book_routes)
app.use('/user', user)

port = 8080
app.listen(port, () => {
    console.log(`Example app listening on port ${8080}`)
})