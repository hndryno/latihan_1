const BukuModel = require("../../models/buku.model") //import model

class getAll {
    constructor() {
        
    }

    async exec() {
        try{
            let query = await BukuModel.find({}).exec()
            return query
        }catch(err){
            throw err
        }
    }
}

module.exports = getAll