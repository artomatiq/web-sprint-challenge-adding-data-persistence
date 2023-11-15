const express = require('express')
const Resource = require('./model')

const router = express.Router()

router.get('/', (req, res, next) => {
    Resource.getResource()
        .then (item => {
            res.status(200).json(item)
        })
        .catch (next)
})

router.post('/', (req, res, next) => {
    Resource.postResource(req.body)
        .then (item => {
            res.status(201).json(item)
        })
        .catch (next)
})

module.exports = router
