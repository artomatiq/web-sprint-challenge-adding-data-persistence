const db = require('../../data/dbConfig')

const getResources = async function () {
    const resources = await db('resources')
        .select('*')

    return resources
}

const postResource = async function (resource) {
    await db('resources')
        .insert(resource)


    const resources = await getResources()
    let result
    for (const r of resources) {
        if (r.resource_name === resource.resource_name) {
            result = r
            delete result.resource_id
        }
    }
    return result
}

module.exports = {getResources, postResource}