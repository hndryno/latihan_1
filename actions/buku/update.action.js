const TokoModel = require("../../models/toko.model") //import model

class UpdateToko {
    constructor(id, req){
        this.id = id,
        this.nama = req.body.nama
        this.deskripsi = req.body.deskripsi
        this.owner = req.body.owner
        this.alamat = req.body.alamat
    }

    async exec(){
        try{
            let data = {
                id: this.id,
                nama: this.nama,
                deskripsi: this.deskripsi,
                owner: this.owner,
                alamat: this.alamat,
                author: this.author
            }

            let query = await TokoModel.findByIdAndUpdate({
                _id: this.id,
            }, data ).exec()

            return query
        }catch(err){
            throw err
        }
    }
}

const update = async (id, updated_data) => {
    let { nama, deskripsi, owner, alamat, fresh } = updated_data
    let opts = {
        new: fresh === 'true' ? true : false
    }
    let data = {
        nama, deskripsi, owner, alamat
    }
    try{
        let query = await TokoModel.findOneAndUpdate({
            _id: id
        }, data, opts).exec()
        return query
    }catch(err){
        throw err
    }
}

module.exports = {
    UpdateToko,
    update
}