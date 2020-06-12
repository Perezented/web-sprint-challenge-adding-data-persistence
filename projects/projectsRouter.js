const express = require("express");
const router = express();

const projectsdb = require("./projects-model");

router.get("/", (req, res) => {
    return projectsdb
        .getProjects()
        .then((projects) => {
            console.log(projects);
            res.status(200).json(projects);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ error: "Could not retrieve the projects" });
        });
});
module.exports = router;
