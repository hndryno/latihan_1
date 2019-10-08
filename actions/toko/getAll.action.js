const TokoModel = require("../../models/toko.model") //import model

class getAll {
    constructor() {
        
    }

    async exec() {
        try{
            let query = await TokoModel.find({}).exec()
            return query
        }catch(err){
            throw err
        }
    }
}

module.exports = getAll