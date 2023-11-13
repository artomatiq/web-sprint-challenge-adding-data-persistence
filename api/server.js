const express = require("express");
const projectRouter = require('./project/router')
const resourceRouter = require('./resource/router')
const taskRouter = require('./task/router')

const server = express()

server.use(express.json())

server.use('/api/projects', projectRouter)

server.use('*', (req, res, next) => {
    res.status(404).json('not found')
})

server.use( (error, req, res, next) => {
    res.status(error.status || 500).json({
        message: error.message,
        customMessage: 'error with server',
        stack: error.stack
    })
})

module.exports = server