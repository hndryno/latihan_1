const UserModel = require("../../models/user.model") //import model

class DeleteUser {
    constructor(id) {
        this.id = id
    }

    async exec() {
        try{
            let query = await UserModel.findOneAndDelete({
                _id: this.id
            }).exec()

            return query
        }catch(err){
            throw err
        }
    }
}

module.exports = DeleteUser