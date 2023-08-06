// Import the models for the User and Thought documents.
const { Thought, User } = require('../models');

// Define the controller for Thought-related routes.
const thoughtController = {
  // Get all Thoughts from the database.
  getAllThoughts(req, res) {
    // Find all Thought documents in the database.
    Thought.find({})
      // Populate the 'reactions' field of each Thought with the actual reaction data, excluding the '__v' field.
      .populate({
        path: 'reactions',
        select: '-__v'
      })
      // Exclude the '__v' field from the Thought data.
      .select('-__v')
      .then(dbThoughtData => res.json(dbThoughtData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // Get a Thought by its ID.
  getThoughtById({ params }, res) {
    // Find a single Thought document by its ID.
    Thought.findOne({ _id: params.id })
      // Populate the 'reactions' field with the actual reaction data, excluding the '__v' field.
      .populate({
        path: 'reactions',
        select: '-__v'
      })
      // Exclude the '__v' field from the Thought data.
      .select('-__v')
      .then(dbThoughtData => res.json(dbThoughtData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // Create a new Thought.
  createThought({ body }, res) {
    // Create a new Thought document in the database.
    Thought.create(body)
      .then(({ _id }) => {
        // Update the User document to associate the new Thought with the User.
        return User.findOneAndUpdate(
          { _id: body.userId },
          { $push: { thoughts: _id } },
          { new: true }
        );
      })
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No user found with this id!' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => res.json(err));
  },

  // Update a Thought.
  updateThought({ params, body }, res) {
    // Find the Thought document and update it with the data from the request body.
    Thought.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
      .then(dbThoughtData => {
        if (!dbThoughtData) {
          res.status(404).json({ message: 'No thought found with this id!' });
          return;
        }
        res.json(dbThoughtData);
      })
      .catch(err => res.json(err));
  },

  // Delete a Thought.
  deleteThought({ params }, res) {
    // Find the Thought document and delete it.
    Thought.findOneAndDelete({ _id: params.id })
      .then(dbThoughtData => {
        if (!dbThoughtData) {
          res.status(404).json({ message: 'No thought found with this id!' });
          return;
        }
        res.json(dbThoughtData);
      })
      .catch(err => res.json(err));
  },

  // Add a reaction to a Thought.
  addReaction({ params, body }, res) {
    // Find the Thought document and add a new reaction to it.
    Thought.findOneAndUpdate(
      { _id: params.thoughtId },
      { $push: { reactions: body } },
      { new: true, runValidators: true }
    )
      .then(dbThoughtData => {
        if (!dbThoughtData) {
          res.status(404).json({ message: 'No thought found with this id!' });
          return;
        }
        res.json(dbThoughtData);
      })
      .catch(err => res.json(err));
  },

  // Remove a reaction from a Thought.
  removeReaction({ params }, res) {
    // Find the Thought document and remove a reaction from it.
    Thought.findOneAndUpdate(
      { _id: params.thoughtId },
      { $pull: { reactions: { reactionId: params.reactionId } } },
      { new: true }
    )
      .then(dbThoughtData => res.json(dbThoughtData))
      .catch(err => res.json(err));
  }
};

// Export the thoughtController for use in other parts of the application.
module.exports = thoughtController;
