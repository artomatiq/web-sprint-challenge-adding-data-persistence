const express = require('express')
const Project = require('./model')

const router = express.Router()

router.get('/', (req, res, next) => {
    Project.get()
        .then (items => {
            res.status(200).json(items)
        })
        .catch (next)
})

router.post('/', (req, res, next) => {
    Task()
        .then (item => {
            res.status().json()
        })
        .catch (next)    
})


module.exports = router