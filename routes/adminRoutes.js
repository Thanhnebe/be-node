const express = require('express');
const router = express.Router();
const WorkoutController = require('../controllers/WorkoutController')

router.get('/workoutall', WorkoutController.getWorkoutAll);

router.post('/createWorkout', WorkoutController.createWourkout);

router.put('/editWorkout/:id', WorkoutController.editWourkout);

router.delete('/deleteWorkout/:id', WorkoutController.deleteWourkout);



router.get('/peronal', WorkoutController.getWorkoutAll);

router.post('/createWorkout', WorkoutController.createWourkout);

router.put('/editWorkout/:id', WorkoutController.editWourkout);

router.delete('/deleteWorkout/:id', WorkoutController.deleteWourkout);


module.exports = router;
