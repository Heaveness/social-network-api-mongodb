// Import the User model.
const { User } = require('../models');

// Define the controller for User-related routes.
const userController = {
  // Get all Users from the database.
  getAllUsers(req, res) {
    // Find all User documents in the database.
    User.find({})
      // Populate the 'thoughts' field of each User with the actual Thought data, excluding the '__v' field.
      .populate({
        path: 'thoughts',
        select: '-__v'
      })
      // Exclude the '__v' field from the User data.
      .select('-__v')
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // Get a User by their ID.
  getUserById({ params }, res) {
    // Find a single User document by their ID.
    User.findOne({ _id: params.id })
      // Populate the 'thoughts' field with the actual Thought data, excluding the '__v' field.
      .populate({
        path: 'thoughts',
        select: '-__v'
      })
      // Exclude the '__v' field from the User data.
      .select('-__v')
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // Create a new User.
  createUser({ body }, res) {
    // Create a new User document in the database.
    User.create(body)
      .then(dbUserData => res.json(dbUserData))
      .catch(err => res.status(400).json(err));
  },

  // Update a User.
  updateUser({ params, body }, res) {
    // Find the User document and update it with the data from the request body.
    User.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No user found with this id!' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => res.status(400).json(err));
  },

  // Delete a User.
  deleteUser({ params }, res) {
    // Find the User document and delete it.
    User.findOneAndDelete({ _id: params.id })
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No user found with this id!' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => res.status(400).json(err));
  },

  // Add a friend to a User's friend list.
  addFriend({ params }, res) {
    // Find the User document and add a new friend to their friend list.
    User.findOneAndUpdate(
      { _id: params.userId },
      { $push: { friends: params.friendId } },
      { new: true, runValidators: true }
    )
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No user found with this id!' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => res.json(err));
  },

  // Remove a friend from a User's friend list.
  removeFriend({ params }, res) {
    // Find the User document and remove a friend from their friend list.
    User.findOneAndUpdate(
      { _id: params.userId },
      { $pull: { friends: params.friendId } },
      { new: true }
    )
      .then(dbUserData => res.json(dbUserData))
      .catch(err => res.json(err));
  }
};

// Export the userController for use in other parts of the application.
module.exports = userController;
