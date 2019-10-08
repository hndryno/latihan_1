const BukuModel = require("../../models/buku.model") //import model

class ShowBuku{
    constructor(id){
        this.id = id
    }

    async exec() {
        try{
            let query = await BukuModel.findOne({
                _id: this.id
            }).exec()

            return query
        }catch(err){
            throw err
        }
    }
}

module.exports = ShowBuku