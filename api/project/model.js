const db = require('../../data/dbConfig')

const get = async function () {
    const projects = await db('projects')
        .select('*')

    projects.map(project => {
        project.project_completed = Boolean(project.project_completed)
    })

    return projects
}

module.exports = {get}