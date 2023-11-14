const db = require('../../data/dbConfig')

const get = async function () {
    const resources = await db('resources')
        .select('*')

    return resources
}

module.exports = {get}