const express = require('express')
const router = express.Router()
const CreateToko = require('../actions/toko/create.action')
const Toko = require('../actions/toko/toko.actions')
const ShowToko = require('../actions/toko/show.action')
// const UpdateToko = require('../actions/toko/update.action')
const DeleteToko = require('../actions/toko/delete.action')
const { update } = require('../actions/toko/update.action')


router.put('/:id', async (req, res) => {
    let {id} = req.params
    let updated_data = {
        nama: req.body.nama,
        deskripsi: req.body.deskripsi,
        owner: req.body.owner,
    }

    try{
        let data = await update(id, updated_data)

        return res.status(200).json({
            status: 'success',
            data,
            message: 'data user berhasil diupdate'
        })
    }catch(err){
        return res.status(400).json({
            status: 'error',
            message: err.message
        })
    }
})

// router.put('/:id', async (req, res, next) => {

//     let nama = req.body.nama
//     let deskripsi = req.body.deskripsi
//     let owner = req.body.owner

//     let updated_data = {
//         nama,
//         deskripsi,
//         owner
//     }

//     try{
//         let { id } = req.params
//         let data = await new UpdateToko(id, updated_data).exec()

//         return res.status(200).json({
//             status: 'success',
//             data,
//             message: 'user data berhasil diupdate'
//         })
//     }catch(err){
//         return res.status(400).json({
//             status: 'error',
//             message: err.message
//         })
//     }
// })

router.post('/', async(req, res, next ) => {
    try{
        let data = await new CreateToko(req).exec() //fungsi non static

        return res.status(201).json({
            status: 'success',
            data,
            message: 'Toko berhasil dibuat'
        })
    }catch(err){
        return res.status(400).json({
            status: 'error',
            message: err.message
        })
    }
})

router.get('/', async(req, res, next )=> {
    try{
        let data = await Toko.all() //fungsi static
        return res.status(200).json({
            status: 'success',
            data,
            message: 'Toko berhasil di get',
        })
    }catch(err){
        return res.status(400).json({
            status: 'error',
            message: err.message
        })
    }
})

router.get('/:id', async(req, res, next) => {
    try{
        let { id } = req.params
        let data = await new ShowToko(id)
        return res.status(200).json({
            status: 'success',
            data,
            message: 'Get toko by id berhasil',
        })
    }catch(err){
        return res.status(400).json({
            status: 'error',
            message: err.message
        })
    }
})

router.delete('/:id', async(req, res, next) => {
    try{
        let { id } = req.params
        let data = await new DeleteToko(id).exec()
        return res.status(200).json({
            status: 'success',
            data,
            message: 'toko berhasil dihapus',
        })
    }catch(err){
        return res.status(400).json({
            status: 'error',
            message: err.message
        })
    }
})



module.exports = router