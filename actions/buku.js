const Buku = require('../models/buku')
const { isInteger } = require('lodash')
const User = require('../models/user')

const create = (req) => {
    let { judul, deskripsi, harga, tahun, author } = req.body
    harga = parseInt(harga)
    tahun = parseInt(tahun)
    
    if(isInteger(harga) === false){
        return 'tipe data harga salah, silahkan coba lagi!'
    }

    if(isInteger(tahun) === false){
        return 'tipe data tahun salah, silahkan coba lagi!'
    }

    let insert_data = {
        judul,
        deskripsi,
        harga,
        tahun,
        author
    }

    let data = new Buku(insert_data)
    data.save()
    return data
}

const getAllData = async() => {
    let query = await Buku.find({})
    .populate([
        {
            path: 'author',
            model: User
        }
    ]).exec()
    console.log(`hasilnya adalah ${query}`)
    return query
}

module.exports = {
    create, getAllData
}
