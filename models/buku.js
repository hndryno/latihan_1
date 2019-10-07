const mongoose = require('mongoose')
const Schema = mongoose.Schema

let bukuSchema = new Schema({
    judul: String,
    deskripsi: {
        type: String,
        default: 'Kosong'
    },
    harga: {
        type: Number,
        default: 0
    },
    tahun: {
        type: Number,
        default: null
    },
    author: String,
    created_at :{
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    }
})

let Buku = mongoose.model('Buku', bukuSchema)

module.exports = Buku