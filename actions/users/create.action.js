const UserModel = require("../../models/user.model") //import model

class CreateUser {
    constructor(req) {
        this.nama = req.body.nama
        this.email = req.body.email
        this.telepon = req.body.telepon
        this.alamat = req.body.alamat
    }

    async exec() {
        try{
            let query = new UserModel({
                nama: this.nama,
                email: this.email,
                telepon: this.telepon,
                alamat: this.alamat
            })
            await query.save()

            return query
        }catch(err){
            throw err
        }
    }
}

module.exports = CreateUser