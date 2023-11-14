/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

const projects = [
  {project_name: 'bathroom', project_description: 'clean the bathroom', project_completed: false},
  {project_name: 'fitness', project_description: 'get jacked', project_completed: false},
  {project_name: 'yum', project_description: 'make kabobs', project_completed: false},
]

const resources = [
  {resource_name: 'paper towels', resource_description: 'soft and nice towels'},
  {resource_name: 'weights', resource_description: '30lb dumbbells'},
  {resource_name: 'protein', resource_description: 'ground beef'},
]

const tasks = [
  {task_description: 'spray the paper towel', task_notes: 'no notes', task_completed: 'false', project_id: 1},
  {task_description: 'lift the weights', task_notes: 'no notes', task_completed: 'false', project_id: 2},
  {task_description: 'eat protein', task_notes: 'no notes', task_completed: 'false', project_id: 2},
  {task_description: 'prepare meat', task_notes: 'no notes', task_completed: 'false', project_id: 3},
  {task_description: 'clean skewers', task_notes: 'no notes', task_completed: 'false', project_id: 3},
]

const projectResources = [
  //bathroom
  {project_id: 1, resource_id: 1},
  //fitness
  {project_id: 2, resource_id: 2},
  {project_id: 2, resource_id: 3},
  //yum
  {project_id: 3, resource_id: 1},
  {project_id: 3, resource_id: 3},

]



exports.seed = async function(knex) {
  await knex('projects').insert(projects)
  await knex('resources').insert(resources)
  await knex('tasks').insert(tasks)
  await knex('project_resources').insert(projectResources)
};

