const express = require('express')
const router = express.Router()
const { create, getAllData } = require('../actions/buku')
const { isString } = require('lodash')

router.post('/', (req, res) => {
    let data = create(req)
    if(isString(data) === true){
        return res.send({
            status: 'success',
            data,
            message: 'data buku berhasil dimasukan!'
        })
    }
})

router.get('/', async (req,res) => {
    try{
        let data = await getAllData()

    return res.send({
            status: 'success',
            data
        })
    }catch(err){
        throw err
    }
})

// router.get('/', (req, res) => {
//     return res.send('berhasil')
// })

module.exports = router