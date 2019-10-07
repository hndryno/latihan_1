const express = require('express')
const app = express()
require('./server/db')

app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    return res.send(`Welcome to the beginning of nothingness`)
})

require('./routes/main')(app)

port = 3300
app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})

