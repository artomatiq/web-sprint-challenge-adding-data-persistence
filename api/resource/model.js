const db = require('../../data/dbConfig')

const getResource = async function () {
    const resources = await db('resources')
        .select('*')

    return resources
}

const postResource = async function (resource) {
    await db('resources')
        .insert(resource)


    // const projects = await getResource()
    // let result
    // for (const p of projects) {
    //     if (p.project_name === project.project_name) {
    //         result = p
    //         delete result.project_id
    //     }
    // }
    return true //result
}

module.exports = {getResource, postResource}