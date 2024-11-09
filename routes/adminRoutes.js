const express = require('express');
const router = express.Router();
const WorkoutController = require('../controllers/WorkoutController')
const PersonalController = require('../controllers/PersonalController')

router.get('/workoutall', WorkoutController.getWorkoutAll);

router.post('/createWorkout', WorkoutController.createWorkout);

router.put('/editWorkout/:id', WorkoutController.editWorkout);

router.delete('/deleteWorkout/:id', WorkoutController.deleteWorkout);



router.get('/personal', PersonalController.getPersonalAll);

router.post('/createPersonal', PersonalController.createPersonal);

router.put('/editPersonal/:id', PersonalController.editPersonal);

router.delete('/deletePersonal/:id', PersonalController.deletePersonal);


module.exports = router;
