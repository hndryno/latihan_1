const express = require('express')
const app = express()
const task_condition = require('./lib/task_condition')
const loop_for = require('./lib/loop/loop_for') 
const loop_map = require('./lib/loop/loop_map')
const map_object = require('./lib/loop/loop_map_object')
const loop_foreach = require('./lib/loop/loop_foreach')

app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    return res.send(`Welcome to the beginning of nothingness`)
})

app.get('/task1', (req, res) => {
    let key1 = req.query.key1
    let key2 = req.query.key2

    let result = task_condition.task1(key1, key2)

    return res.send(result)
})

app.post('/task2', (req, res) => {
    let {name, email, password} = req.body
    let result = task_condition.task2(name, email, password)

    return res.send(result)
})

app.get('/loop-for',(req, res) => {
    let data = ['merah', 'kuning', 'hijau']
    let result = loop_for(data)

    return res.send(result)
})

app.get("/loop-foreach", (req, res) => {
    let data = ['Red', 'Blue', 'Green', 'Yellow']
    let result = loop_foreach(data)

    return res.send(result)
})

app.get('/loop-map', (req, res) => {
    let data = ['merah', 'kuning', 'hijau']
    let result = loop_map(data)

    return res.send(result)
})

app.get('/object-loop', (req, res) => {
    let data = [
        {
            name: "Red",
            note: "Danger"
        },
        {
            name: "Yellow",
            note: "warning"
        },
        {
            name: "Green",
            note: "Success"
        }
    ]

    let result = map_object(data)

    return res.send(result)
})

app.post('/loop-add', (req, res) => {
    let array = []
    let nama = req.body.nama
    let result = array.concat(nama)
    console.log(result)

    return res.send(result)
})

const port = 3300
app.listen(port, () => {
    console.log(`App listen on port ${port}`)
})