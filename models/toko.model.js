const mongoose = require('mongoose')
const Schema = mongoose.Schema

const tokoSchema = new Schema({
    nama: String,
    deskripsi: String,
    owner: String,
    created_at: {
        type: Date,
        default: Date.now()
    },
    updated_at: {
        type: Date,
        default: Date.now()
    }
})

let Toko = mongoose.model('Toko', tokoSchema)
module.exports = Toko