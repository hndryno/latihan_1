const BukuModel = require("../../models/buku.model") //import model

class DeleteBuku {
    constructor(id) {
        this.id = id
    }

    async exec() {
        try{
            let query = await BukuModel.findOneAndDelete({
                _id: this.id
            }).exec()

            return query
        }catch(err){
            throw err
        }
    }
}

module.exports = DeleteBuku