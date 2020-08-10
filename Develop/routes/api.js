const db = require("../models/workout.js");
const router = require("express").Router();

  router.get("/api/workouts/", (req, res) => {
    db.Workout.find({})
      .then(dbWorkout => {
        res.json(dbWorkout)
      })
      .catch(err => {
        res.status(400).json(err);
      })
    });

  router.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
      .then(dbWorkout => {
        res.json(dbWorkout)
      })
      .catch(err => {
        res.status(400).json(err);
      });
    });
    
  router.put("/api/workouts/:id", ({ body, params }, res) => {
      Workout.findByIdAndUpdate(
        params.id,
        {$push:{exercises: body}},
        {new: true}
      )
        .then(dbWorkout=> {
          res.json(dbWorkout);
        })
        .catch(err => {
          res.status(400).json(err);
        });
      });

  router.post("/api/workouts/", ({body }, res) => {
    db.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;