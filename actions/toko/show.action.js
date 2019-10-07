const Toko = require("../../models/toko.model") //import model

class ShowToko{
    constructor(id){
        this.id = id
    }

    async exec() {
        try{
            let query = await Toko.findOne({
                _id: this.id
            }).exec()

            return query
        }catch(err){
            throw err
        }
    }
}

module.exports = ShowToko