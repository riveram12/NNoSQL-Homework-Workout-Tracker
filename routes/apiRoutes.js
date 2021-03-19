const router = require("express").Router();
const Workouts = require("../models/workouts.js");

router.post("/api/transaction", ({ body }, res) => {
  workouts
    .create(body)
    .then((dbWorkouts) => {
      res.json(dbTransaction);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.post("/api/transaction/bulk", ({ body }, res) => {
  workouts
    .insertMany(body)
    .then((dbWorkouts) => {
      res.json(dbTransaction);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/api/transaction", (req, res) => {
  workouts
    .find({})
    .sort({ date: -1 })
    .then((dbWorkouts) => {
      res.json(dbTransaction);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;
