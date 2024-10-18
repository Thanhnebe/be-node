const express = require('express');
const router = express.Router();
const WorkoutController = require('../controllers/WorkoutController')
const PersonalController = require('../controllers/PersonalController')

router.get('/workoutall', WorkoutController.getWorkoutAll);

router.post('/createWorkout', WorkoutController.createWourkout);

router.put('/editWorkout/:id', WorkoutController.editWourkout);

router.delete('/deleteWorkout/:id', WorkoutController.deleteWourkout);



router.get('/peronal', PersonalController.getPersonalAll);

router.post('/createWorkout', PersonalController.createPersonal);

router.put('/editWorkout/:id', PersonalController.editPersonal);

router.delete('/deleteWorkout/:id', PersonalController.deletePersonal);


module.exports = router;
