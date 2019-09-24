const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    var x, y, z
    x = 5
    y = 12
    z = x + y

    return res.send(`The value of z is ${z}`)
})

app.post('/', (req, res) => {
    let email = req.body.email
    
    return res.send(`The email value is ${email}`)
})

app.post('/tambah', (req, res) => {
    let a, b, c, d

    a = parseInt(req.body.a)
    b = parseInt(req.body.b)
    c = parseInt(req.body.c)
    d = a + b + c

    /**
     * Check data type of all variable
     */
    console.log(typeof a)
    console.log(typeof b)
    console.log(typeof c)
    console.log(typeof d)

    
    return res.send(`The result value is ${d}`)
})

app.post('/bagi', (req, res) => {
    let a, b, c, d
    /**
     * Data type of variable a & b must be number, not string
     */
    a = parseInt(req.body.a)
    b = parseInt(req.body.b)
    c = parseInt(req.body.c)

    d = a + b / c

    /**
     * Check data type of all variable
     */
    console.log(typeof a)
    console.log(typeof b)
    console.log(typeof c)
    console.log(typeof d)
    
    return res.send(`The result value is ${d}`)
})

app.post('/kurang', (req, res) => {
    let a, b, c, d
    /**
     * Data type of variable a & b must be number, not string
     */
    a = parseInt(req.body.a)
    b = parseInt(req.body.b)
    c = parseInt(req.body.c)
    d = parseInt(req.body.d)


    d = a - b - c

    /**
     * Check data type of all variable
     */
    console.log(typeof a)
    console.log(typeof b)
    console.log(typeof c)
    console.log(typeof d)
    
    return res.send(`The result value is ${d}`)
})

app.post('/kali', (req, res) => {
    let a, b, c, d
    /**
     * Data type of variable a & b must be number, not string
     */
    a = parseInt(req.body.a)
    b = parseInt(req.body.b)
    c = parseInt(req.body.c)
    d = a * b * c

    /**
     * Check data type of all variable
     */
    console.log(typeof a)
    console.log(typeof b)
    console.log(typeof c)
    console.log(typeof d)

    
    return res.send(`The result value is ${d}`)
})

app.post('/kasus', (req, res) => {
    let a, b, c, d
    /**
     * Data type of variable a & b must be number, not string
     */
    a = parseInt(req.body.a)
    b = parseInt(req.body.b)
    c = parseInt(req.body.c)
    d = a * b / c

    /**
     * Check data type of all variable
     */
    console.log(typeof a)
    console.log(typeof b)
    console.log(typeof c)
    console.log(typeof d)

    if(d%2 == 0){
        return res.send(`Bilangan ${d}, adalah bilangan Genap`)
    }else{
        return res.send(`Bilangan ${d}, adalah bilangan Ganjil`)
    }
})

console.log('berubah')

app.listen(8080, () => {
    console.log(`Example app listening on port 8080`)
})