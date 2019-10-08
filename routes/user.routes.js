const express = require('express')
const router = express.Router()
// const { create, getSemuaData, userDetail, update, destroy } = require('../actions/user')
const CreateUser = require('../actions/users/create.action')
const getAll = require('../actions/users/getAll.action')
const showUser = require('../actions/users/show.action')
const deleteUser = require('../actions/users/delete.action')
const { update } = require('../actions/users/update.action')

router.post('/', async (req, res) => {
    let data = await new CreateUser(req).exec()
    try{
        return res.status(201).json({
            status: 'success!',
            data,
            message: 'User berhasil dibuat!'
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
        let data = await new showUser(id).exec()
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
        let data = await new deleteUser(id).exec()
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