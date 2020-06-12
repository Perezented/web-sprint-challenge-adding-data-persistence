const db = require("../data/db-connection");
module.exports = { getProjects, getResources, getTasks };
function getProjects() {
    return db("projects");
}

function getResources() {
    return db("resources");
}
function getTasks() {
    return db("tasks");
}
