const TokoModel = require("../../models/toko.model") //import model

class DeleteToko{
    constructor(id){
        this.id = id
    }

    async exec() {
        try{
            let query = await TokoModel.findOneAndDelete({
                _id: this.id
            }).exec()

            return query
        }catch(err){
            throw err
        }
    }
}

module.exports = DeleteToko