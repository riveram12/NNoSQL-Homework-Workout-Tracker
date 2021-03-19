const router = require("express").Router();
const Workouts = require("../models/workouts.js");

router.post("/api/workouts", ({ body }, res) => {
  workouts
    .create(body)
    .then((dbWorkouts) => {
      res.json(dbWorkouts);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", (req, res) => {
  workouts
    .findByIdAndUpdate(
      { _id: req.params.id },
      { $push: { exercises: req.body } }
    )
    .then((data) => res.json(data))
    .catch((err) => {
      console.log("err", err);
      res.json(err);
    });
});

router.get("/api/workouts", (req, res) => {
  workouts
    .find({})
    .then((dbWorkouts) => {
      res.json(dbWorkouts);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;
