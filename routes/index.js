// Import the router object from express.
const router = require('express').Router();

// Import the api routes.
const apiRoutes = require('./api');

// Use the api routes when the path starts with '/api'.
router.use('/api', apiRoutes);

// Define a universal route to handle all other requests not caught by the other routes.
router.use((req, res) => {
  res.status(404).send('<h1>😝 404 Error!</h1>');
});

// Export the router object.
module.exports = router;
