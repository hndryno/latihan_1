const TokoModel = require("../../models/toko.model") //import model

class CreateToko {
    constructor(req) {
        this.nama = req.body.nama
        this.deskripsi = req.body.deskripsi
        this.owner = req.body.owner
        this.alamat = req.body.alamat
    }

    async exec() {
        try{
            let query = new TokoModel({
                nama: this.nama,
                deskripsi: this.deskripsi,
                owner: this.owner,
                alamat: this.alamat
            })
            await query.save()

            return query
        }catch(err){
            throw err
        }
    }
}

module.exports = CreateToko