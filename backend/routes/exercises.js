const router = require('express').Router();
let Exercise = require('../models/exercise.model');

router.route('/').get((req, res) => {
    Exercise.find()
      .then(exercises => res.json(exercises))
      .catch(err => res.status(400).json('Error:'+ err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const exerciseName = req.body.exerciseName;
    const duration = Number(req.body.duration);
    const description = req.body.description;
    const dateCreated = Date.parse(req.body.date);

    const newExercise = new User({
        username,
        exerciseName,
        duration,
        description,
        dateCreated
    });

    newExercise.save()
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json('Error:'+ err));
});

router.route('/:id').get((req, res) => {
    Exercise.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/:id').delete((req, res) => {
    Exercise.findByIdAndDelete(req.params.id)
    .then(() => res.json('Exercise deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Exercise.findById(req.params.id)
    .then(exercise => {
        exercise.username = req.body.username;
        exercise.exerciseName = req.body.exerciseName;
        exercise.duration = Number(req.body.duration);
        exercise.dateCreated = Date.parse(req.body.date);
        exercise.description = req.body.description;

        exercise.save()
        .then(() => res.json('Exercise updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
});

module.exports = router;
