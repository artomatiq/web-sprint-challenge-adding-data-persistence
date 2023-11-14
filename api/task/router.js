const express = require('express')
const Task = require('./model')

const router = express.Router()

router.get('/', (req, res, next) => {
    Task.get()
        .then (item => {
            res.status(200).json(item)
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