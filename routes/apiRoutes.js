const router = require("express").Router();
const Workout = require("../models/workout.js");

router.get("/api/workout", (req, res) => {
  Workout.find({})
    .sort({ date: -1 })
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.post("/api/workout", (req, res) => {
  Workout.create({})
    .then((dbWorkout) => {
      res.json();
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;
