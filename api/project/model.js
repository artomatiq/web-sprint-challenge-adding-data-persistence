const db = require('../../data/dbConfig')

const getProjects = async function () {
    const projects = await db('projects')
        .select('*')

    projects.map(project => {
        project.project_completed = Boolean(project.project_completed)
    })

    return projects
}

const postProjects = async function (project) {
    await db('projects')
        .insert(project)
    const projects = await getProjects()

    let result = {}
    for (const p of projects) {
        if (p.project_id === project.project_id) {
            result = p
        }
    }
    return result
}

module.exports = {getProjects, postProjects}