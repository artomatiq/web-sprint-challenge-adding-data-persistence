/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

const projects = [
  {project_name: 'bathroom', project_description: 'clean the bathroom', project_completed: false},
  {project_name: 'fitness', project_description: 'get jacked', project_completed: false},
  {project_name: 'yum', project_description: 'make kabobs', project_completed: false},
]

const tasks = [
  {project_name: 'bathroom', project_description: 'clean the bathroom'},
  {project_name: 'fitness', project_description: 'get jacked'},
  {project_name: 'yum', project_description: 'make kabobs'},
]

const resources = [
  {project_name: 'bathroom', project_description: 'clean the bathroom'},
  {project_name: 'fitness', project_description: 'get jacked'},
  {project_name: 'yum', project_description: 'make kabobs'},
]



exports.seed = async function(knex) {
  await knex('projects').insert(projects)
  await knex('resources').insert(resources)
  await knex('tasks').insert(tasks)
  await knex('project_resources').insert(projectResources)
};

