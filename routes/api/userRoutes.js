// Import the router object from express.
const router = require('express').Router();
// Import all the controller methods from the userControllers file.
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend
} = require('../../controllers/userControllers');

// Define a route for GET all and POST requests at /api/users.
router
  .route('/')
  .get(getAllUsers)
  .post(createUser); 

// Define a route for GET one, PUT, and DELETE requests at /api/users/:id.
router
  .route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

// Define a route for POST and DELETE requests at /api/users/:userId/friends/:friendId.
router
  .route('/:userId/friends/:friendId')
  .post(addFriend)
  .delete(removeFriend);

// Export the router object.
module.exports = router;
