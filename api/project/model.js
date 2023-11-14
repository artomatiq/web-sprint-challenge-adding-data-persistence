const db = require('../../data/dbConfig')

const get = async function () {
    const projects = await db('projects')
        .select('*')

    return projects
}

module.exports = {get}