const express = require("express");

// import Models
const actions = require("../data/helpers/actionModel");

const projects = require("../data/helpers/projectModel.js");

const router = express.Router();

// get all actions
router.get("/", (req, res) => {
  actions
    .get()
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(err => {
      res.status(500).json({ error: "Actions could not be retrieved." });
    });
});

module.exports = router;
