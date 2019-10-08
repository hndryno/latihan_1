const mongoose = require('mongoose')
const Schema = mongoose.Schema

let tokoSchema = new Schema({
    nama: {
        type: String,
        validate(value){
            if(validator.isEmpty(value)){
                throw new Error('Field nama tidak boleh kosong!')
            }
        }
    },                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
    deskripsi: {
        type: String,
        validate(value){
            if(validator.isEmpty(value)){
                throw new Error('Field deskripsi tidak boleh kosong!')
            }
        }
    },
    owner: {
        type: String,
        validate(value){
            if(validator.isEmpty(value)){
                throw new Error('Field deskripsi tidak boleh kosong!')
            }
        }
    },
    alamat: {
        type: String,
        validate(value){
            if(validator.isEmpty(value)){
                throw new Error('Field deskripsi tidak boleh kosong!')
            }
        }
    },
    created_at: {
        type: Date,
        default: Date.now()
    },
    updated_at: {
        type: Date,
        dafault: Date.now()
    }
})

let Toko = mongoose.model('Toko', tokoSchema)

module.exports = Toko