const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const actionRouter = require("../routers/actionRouter.js");
const projectRouter = require("../routers/projectRouter.js");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api/actions", actionRouter);
server.use("/api/projects", projectRouter);

server.get("/", (req, res) => {
  res.send("It's working!");
});

module.exports = server;
