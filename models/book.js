const mongoose = require('mongoose')
const Schema = mongoose.Schema

let bukuSchema = new Schema({
    title: String,
    description: String,
    created_at: {
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