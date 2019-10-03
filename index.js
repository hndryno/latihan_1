const express = require('express')
const app = express()
require('./db')

const index_routes = require('./routes/index')
const buku_routes = require('./routes/buku')
const user_routes = require('./routes/user')

app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    return res.send(`Welcome to the beginning of nothingness`)
})

app.use('/index', index_routes)
app.use('/user', user_routes)
app.use('/buku', buku_routes)

port = 3300
app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})

