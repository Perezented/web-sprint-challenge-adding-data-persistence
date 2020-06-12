const express = require("express");

const server = express();
const projectsRouter = require("./projects/projectsRouter");
server.use(express.json());
server.use("/api", projectsRouter);

server.get("/", (req, res) => {
    res.status(200).json({ message: "home slash of sprint" });
});
module.exports = server;
