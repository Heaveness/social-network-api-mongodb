// Import the router object from express.
const router = require('express').Router();
// Import all the controller methods from the thoughtControllers file.
const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction
} = require('../../controllers/thoughtControllers');

// Define a route for GET all and POST requests at /api/thoughts.
router
  .route('/')
  .get(getAllThoughts)  
  .post(createThought);  

// Define a route for GET one, PUT, and DELETE requests at /api/thoughts/:id.
router
  .route('/:id')
  .get(getThoughtById)  
  .put(updateThought)  
  .delete(deleteThought); 

// Define a route for POST requests at /api/thoughts/:thoughtId/reactions.
router
  .route('/:thoughtId/reactions')
  .post(addReaction);  

// Define a route for DELETE requests at /api/thoughts/:thoughtId/reactions/:reactionId.
router
  .route('/:thoughtId/reactions/:reactionId')
  .delete(removeReaction);

// Export the router object.
module.exports = router;
