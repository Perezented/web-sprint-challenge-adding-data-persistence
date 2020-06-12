const express = require("express");
const router = express();

const projectsdb = require("../model/all-model");
//  get all the projects

router.get("/projects", (req, res) => {
    return projectsdb
        .getProjects()
        .then((projects) => {
            console.log(projects);
            res.status(200).json(projects);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({
                error: "Could not retrieve the projects",
                err,
            });
        });
});

//  add a project

router.post("/projects", (req, res) => {
    projectsdb
        .addProject(req.body)
        .then((project) => {
            res.status(201).json(project);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ error: "error adding project", err });
        });
});
//  get all the tasks

router.get("/tasks", (req, res) => {
    return projectsdb
        .getTasks()
        .then((tasks) => {
            res.status(200).json(tasks);
        })
        .catch((err) => {
            res.status(500).json({
                error: "Could not retrieve the tasks",
                err,
            });
        });
});

//  add a task

router.post("/tasks", (req, res) => {
    projectsdb
        .addTask(req.body)
        .then((task) => {
            res.status(201).json(task);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ error: "error adding task" });
        });
});
//  get all the resources

router.get("/resources", (req, res) => {
    return projectsdb
        .getResources()
        .then((resources) => {
            res.status(200).json(resources);
        })
        .catch((err) => {
            res.status(500).json({
                error: "Could not retrieve the resources",
                err,
            });
        });
});

//  add a resource

router.post("/resources", (req, res) => {
    projectsdb
        .addResource(req.body)
        .then((resource) => {
            res.status(201).json(resource);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ error: "error adding resource" });
        });
});

//  gets all the projects and their resources

router.get("/project-resources", (req, res) => {
    projectsdb
        .getProjectResources()
        .then((theresources) => {
            console.log(theresources);
            res.status(201).json(theresources);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({
                error: "error retrieving resources",
            });
        });
});

//  Gets resources for specified project

router.get("/project-resources/:id", (req, res) => {
    projectsdb
        .getSingleProjectsResources(req.params.id)
        .then((theresources) => {
            console.log(theresources);
            res.status(201).json(theresources);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({
                error: "error retrieving resources",
            });
        });
});
module.exports = router;
