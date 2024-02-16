const router = require('express').Router()
const userRoutes = require('./userRoutes')
const workoutRoutes = require('./workoutRoutes');
const dietRoutes = require('./dietRoutes');
const notificationRoutes = require('./notificationRoutes')
const sessionRoutes = require('./sessionRoutes'); // Adjust the path as per your structure


router.use('/session', sessionRoutes);
router.use('/users', userRoutes);
router.use('/workouts', workoutRoutes);
router.use('/diets', dietRoutes);
router.use('/notifications', notificationRoutes);

module.exports = router;