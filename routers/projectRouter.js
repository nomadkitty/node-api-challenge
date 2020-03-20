const express = require("express");

//import models
const projects = require("../data/helpers/projectModel.js");

// import middleware
const validateProjectId = require("../middleware/validateProjectId");
const validateProject = require("../middleware/validateProject.js");

const router = express.Router();

// get all projects
router.get("/", (req, res) => {
  projects
    .get()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(err => {
      res.status(500).json({ error: "Projects could not be retrieved." });
    });
});

// get project by id
router.get("/:id", validateProjectId, (req, res) => {
  const { id } = req.params;
  projects
    .get(id)
    .then(project => {
      res.status(200).json(project);
    })
    .catch(err => {
      res.status(500).json({ error: "The project could not be retrieved." });
    });
});

// post a project
router.post("/", validateProject, (req, res) => {
  projects
    .insert(req.body)
    .then(newProject => {
      res.status(201).json(newProject);
    })
    .catch(err => {
      res.status(500).json({ error: "Can't add new projects." });
    });
});

// update a project by id
router.put("/:id", validateProjectId, validateProject, (req, res) => {
  const { id } = req.params;
  const changes = req.body;
  projects
    .update(id, changes)
    .then(project => {
      res.status(200).json(project);
    })
    .catch(err => {
      res.status(500).json({ error: "Can't update project" });
    });
});

// delete a project by id
router.delete("/:id", validateProjectId, (req, res) => {
  const { id } = req.params;
  projects
    .remove(id)
    .then(project => {
      res.status(200).json({ message: "Successfully Deleted" });
    })
    .catch(err => {
      res.status(500).json({ message: "Can't delete project" });
    });
});

module.exports = router;
