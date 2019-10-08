const validator = require('validator')
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bukuSchema = new Schema({
    judul:{
        type: String,
        validate(value){
            if(validator.isEmpty(value)){
                throw new Error('Field judul tidak boleh kosong!')
            }
        }
    },                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
    deskripsi: {
        type: String,
        validate(value){
            if(validator.isEmpty(value)){
                throw new Error('Field Deskripsi tidak boleh kosong!')
            }
        }
    },
    harga: Number,
    tahun: Number,
    author: String,
    created_at: {
        type: Date,
        default: Date.now()
    },
    updated_at: {
        type: Date,
        dafault: Date.now()
    }
})

let Buku = mongoose.model('Buku', bukuSchema)

module.exports = Buku