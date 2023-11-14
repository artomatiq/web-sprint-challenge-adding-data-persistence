const db = require('../../data/dbConfig')

const get = async function () {
    const tasks = await db('tasks as t')
        .join('projects as p', 't.project_id', 'p.project_id')
        .select(
            "task_id",
            "task_description",
            "task_notes",
            "task_completed",
            "project_name", 
            "project_description"
        )
        tasks.map(task => {
            task.task_completed = Boolean(task.task_completed)
        })

    return tasks
}

module.exports = {get}