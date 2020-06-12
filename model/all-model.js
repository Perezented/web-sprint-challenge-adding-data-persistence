const db = require("../data/db-connection");
module.exports = {
    getProjects,
    getResources,
    getTasks,
    addProject,
    addTask,
    addResource,
};
function getProjects() {
    return db("projects");
}

function getResources() {
    return db("resources");
}
function getTasks() {
    return db("tasks").join(
        "projects",
        "tasks.ProjectID",
        "projects.projectID"
    );
}
function addProject(newProject) {
    return db("projects").insert(newProject, "*");
}
function addTask(newTask) {
    return db("tasks").insert(newTask, "*");
}
function addResource(newResource) {
    return db("resources").insert(newResource, "*");
}
