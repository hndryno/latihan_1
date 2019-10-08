const BukuModel = require("../../models/buku.model") //import model

class CreateBuku {
    constructor(req) {
        this.judul = req.body.judul
        this.deskripsi = req.body.deskripsi
        this.harga = req.body.harga
        this.tahun = req.body.tahun
        this.author = req.body.author
    }

    async exec() {
        try{
            let query = new BukuModel({
                judul: this.judul,
                deskripsi: this.deskripsi,
                harga: this.harga,
                tahun: this.tahun,
                author: this.author,
            })
            await query.save()

            return query
        }catch(err){
            throw err
        }
    }
}

module.exports = CreateBuku