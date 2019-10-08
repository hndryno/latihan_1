const User = require('../models/user.model')

const create = async (req) => {
    let { nama, email, telepon, alamat } = req.body
    telepon = parseInt(telepon)
    let insert_data = {
        nama,
        email,
        telepon,
        alamat
    }

    let data = new User(insert_data)

    try {
        await data.save()

        return data
    } catch(err) {
        throw err
    }
}

const getSemuaData = async () => {
    try{
        let query = await User.find({}).exec()
        let data = query.map((v, i) => {
            return {
                name: v.nama,
                email: v.email,
                telepon: v.telepon,
                alamat: v.alamat
            }
        })
        return data
    }catch(err){
        throw err
    }
}

const userDetail = async (id) => {
    try{
        let query = await User.findOne({
            _id: id
        }).exec()
        return query
    }catch(err){
        throw err
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
        let query = await User.findOneAndUpdate({
            _id: id
        }, data, opts).exec()
        return query
    }catch(err){
        throw err
    }
}

const destroy = async (id) =>{
    try{
        let query = await User.findOneAndDelete({}).exec()
        return query
    }catch(err){
        throw err
    }
}

module.exports = {
    create,
    getSemuaData,
    userDetail,
    update,
    destroy
}