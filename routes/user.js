const express = require('express')
const router = express.Router()
const { create, getSemuaData, userDetail, update, destroy } = require('../actions/user')

router.post('/', async (req, res) => {
    try{
        let data = await create(req)
        return res.status(200).json({
            status: 'success',
            data,
            message: 'User baru berhasil dibuat'
        })
    }catch(err){
        return res.status(400).json({
            status: 'gagal',
            data,
            message: err.message
        })
    }
})

router.get('/', async (req, res) => {
    try{
        let data = await getSemuaData()

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
        let data = await userDetail(id)
        return  res.status(200).json({
            status: 'success',
            data,
            message: 'berhasil get data user'
        })
    }catch(err){
        return res.status(400).json({
            status: 'error',
            message: err.message
        })
    }
})

router.put('/:id', async (req, res) => {
    let {id} = req.params
    let updated_data = {
        nama: req.body.nama,
        email: req.body.email,
        telepon: req.body.telepon,
        alamat: req.body.alamat
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

router.delete('/:id', async(req, res)=>{
    let {id} = req.params

    try{
        let data = await destroy(id)
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

module.exports = router