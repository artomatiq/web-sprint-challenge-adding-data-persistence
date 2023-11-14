const express = require('express')
const Task = require('./model')

const router = express.Router()

router.get('/:id', (req, res, next) => {
    Task()
        .then (item => {
            res.status().json()
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