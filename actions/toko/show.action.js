const TokoModel = require("../../models/toko.model") //import model

class ShowToko{
    constructor(id){
        this.id = id
    }

    async exec() {
        try{
            let query = await TokoModel.findOne({
                _id: this.id
            }).exec()

            return query
        }catch(err){
            throw err
        }
    }
}

module.exports = ShowToko