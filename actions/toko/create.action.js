const Toko = require("../../models/toko.model") //import model


class CreateToko {
    constructor(req) {
        this.nama = req.body.nama
        this.deskripsi = req.body.deskripsi
        this.owner = req.body.owner
    }

    async exec() {
        try{
            let query = new Toko({
                nama: this.nama,
                deskripsi: this.deskripsi,
                owner: this.owner
            })
            await query.save()

            return query
        }catch(err){
            throw err
        }
    }
}

module.exports = CreateToko
