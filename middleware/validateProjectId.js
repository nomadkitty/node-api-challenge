const projects = require("../data/helpers/projectModel");

function validateProjectId(req, res, next) {
  const id = req.params.id;
  projects.get(id).then(project => {
    if (project) {
      project = req.project;
      next();
    } else {
      res.status(400).json({ message: "Invalid project id" });
    }
  });
}

module.exports = validateProjectId;
