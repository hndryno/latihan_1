const express = require('express')
const router = express.Router()
const bookModel = require('../models/book')

router.post('/', (req, res) => {
    let { title,description } = req.body
    let insert_data = {
        title,
        description
    }

    let data = new bookModel(insert_data)
    data.save()

    return res.send({
        status: "success",
        data,
        message: "Buku berhasil dibuat"
    })
})

module.exports = router