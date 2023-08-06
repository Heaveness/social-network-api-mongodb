// Import the router object from express.
const router = require('express').Router();

// Import the userRoutes and thoughtRoutes.
const userRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtRoutes');

// Define a route for requests made to /users to use the userRoutes.
router.use('/users', userRoutes);
// Define a route for requests made to /thoughts to use the thoughtRoutes.
router.use('/thoughts', thoughtRoutes);

// Export the router object.
module.exports = router;
