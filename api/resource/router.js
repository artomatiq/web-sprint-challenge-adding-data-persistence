const express = require('express')
const Resource = require('./model')

const router = express.Router()

router.get('/', (req, res, next) => {
    Resource.get()
        .then (item => {
            res.status(200).json(item)
        })
        .catch (next)
})

router.post('/', (req, res, next) => {
    Resource.post()
        .then (item => {
            res.status().json()
        })
        .catch (next)
})

module.exports = router
