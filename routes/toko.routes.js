const express = require('express')
const router = express.Router()
const CreateToko = require('../actions/toko/create.action')
const getAll = require('../actions/toko/getAll.action')
const ShowToko = require('../actions/toko/show.action')
const DeleteToko = require('../actions/toko/delete.action')
const { update } = require('../actions/toko/update.action')

router.post('/', async (req, res) => {
    let data = await new CreateToko(req).exec()
    try{
        return res.status(201).json({
            status: 'success!',
            data,
            message: 'Toko berhasil dibuat!'
        })
    }catch(err){
        return res.status(400).json({
            status: 'failed!',
            message: err.message
        })
    }
})

router.get('/', async (req, res) => {
    try{
        let data = await new getAll().exec()
        return res.send({
            status: 'berhasil',
            data,
            message: 'berhasil get semua data'
        })
    }catch(err){
        return res.status(400).json({
            status: 'error',
            message: err.message
        })
    }
})

router.get('/:id', async (req, res) => {
    try{
        let {id} = req.params
        let data = await new ShowToko(id).exec()
        return res.status(200).json({
            status: 'success',
            data,
            message: 'berhasil get data toko'
        })
    }catch(err){
        return res.status(400).json({
            status: 'error',
            message: err.message
        })
    }
})

router.delete('/:id', async(req, res)=>{
    let {id} = req.params
    try{
        let data = await new DeleteToko(id).exec()
        return res.status(400).json({
            status: 'success',
            data,
            message: 'data berhasil dihapus'
        })
    }catch(err){
        return res.status(200).json({
            status: 'error',
            data,
            message: err.message
        })
    }
})

router.put('/:id', async (req, res) => {
    let {id} = req.params
    let updated_data = {
        nama :req.body.nama,
        deskripsi :req.body.deskripsi,
        owner :req.body.owner,
        alamat :req.body.alamat
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

module.exports = router