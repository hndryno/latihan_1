const UserModel = require("../../models/user.model") //import model

class ShowUser{
    constructor(id){
        this.id = id
    }

    async exec() {
        try{
            let query = await UserModel.findOne({
                _id: this.id
            }).exec()

            return query
        }catch(err){
            throw err
        }
    }
}

module.exports = ShowUser