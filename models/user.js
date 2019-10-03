const mongoose = require('mongoose')
const Schema = mongoose.Schema

let userSchema = new Schema({
    nama: String,
    email: String,
    telepon: Number,
    alamat: String,
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        dafault: Date.now
    }
})

let User = mongoose.model('User', userSchema)

module.exports = User