const UserModel = require("../../models/user.model") //import model

class UpdateUser {
    constructor(id, req){
        this.id = id,
        this.nama = req.body.nama
        this.email = req.body.email,
        this.telepon = req.body.telepon
        this.alamat = req.body.alamat
    }

    async exec(){
        try{
            let data = {
                id: this.id,
                nama: this.nama,
                email: this.email,
                telepon: this.telepon,
                alamat: this.alamat
            }

            let query = await UserModel.findByIdAndUpdate({
                _id: this.id,
            }, data ).exec()

            return query
        }catch(err){
            throw err
        }
    }
}

const update = async (id, updated_data) => {
    let { nama, email, telepon, alamat, fresh } = updated_data
    let opts = {
        new: fresh === 'true' ? true : false
    }
    let data = {
        nama, email, telepon, alamat
    }
    try{
        let query = await UserModel.findOneAndUpdate({
            _id: id
        }, data, opts).exec()
        return query
    }catch(err){
        throw err
    }
}

module.exports = {
    UpdateUser,
    update
}