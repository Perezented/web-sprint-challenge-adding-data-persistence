const express = require("express");
const router = express();
const projectsdb = require("./projects-model");
router.get("/projects", (req, res) => {
    return projectsdb
        .getProjects()
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        });
});
module.exports = router;
