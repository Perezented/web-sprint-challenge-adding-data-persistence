const db = require("../data/db-connection");
module.exports = {
    getProjects,
    getResources,
    getTasks,
    addProject,
    addTask,
    addResource,
    getProjectResources,
    getSingleProjectsResources,
};
//  get all the projects

function getProjects() {
    return db("projects");
}
//  get all the resources

function getResources() {
    return db("resources");
}

//  get all the tasks

function getTasks() {
    return db("tasks").join(
        "projects",
        "tasks.ProjectID",
        "projects.projectID"
    );
}

//  add a project

function addProject(newProject) {
    return db("projects").insert(newProject, "*");
}

//  add a task

function addTask(newTask) {
    return db("tasks").insert(newTask, "*");
}

//  add a resource

function addResource(newResource) {
    return db("resources").insert(newResource, "*");
}

//  gets all the projects and their resources

function getProjectResources() {
    return db("projectResources")
        .join("projects", "projectResources.ProjectID", "projects.projectID")
        .join(
            "resources",
            "projectResources.ResourceID",
            "resources.resourceID"
        );
}

//  Gets resources for specified project

function getSingleProjectsResources(projectID) {
    return db("projectResources")
        .join("projects", "projectResources.ProjectID", "projects.projectID")
        .join(
            "resources",
            "projectResources.ResourceID",
            "resources.resourceID"
        )
        .where("projectResources.ProjectID", projectID);
}
