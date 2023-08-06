// Import the Schema, model, and Types objects from Mongoose.
const { Schema, model, Types } = require('mongoose');
// Import the dateFormat function from the utils directory.
const dateFormat = require('../utils/dateFormat');
// Import the Reaction schema.
const reactionSchema = require('./Reaction');

// Define the ReactionSchema.
const ReactionSchema = new Schema(
  {
    // Include a reactionId which defaults to a new ObjectId.
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId()
    },
    // Include a reactionBody which is required and must be 280 characters or less.
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280
    },
    // Include a username which is required.
    username: {
      type: String,
      required: true
    },
    // Include a createdAt field which defaults to the current date and time and is formatted by dateFormat.
    createdAt: {
      type: Date,
      default: Date.now,
      get: createdAtVal => dateFormat(createdAtVal)
    }
  },
  {
    // Define the toJSON property to include virtuals and utilize getters.
    toJSON: {
      getters: true
    }
  }
);

// Define the ThoughtSchema.
const ThoughtSchema = new Schema(
  {
    // Include a thoughtText which is required and must be between 1 and 280 characters.
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280
    },
    // Include a createdAt field which defaults to the current date and time and is formatted by dateFormat.
    createdAt: {
      type: Date,
      default: Date.now,
      get: createdAtVal => dateFormat(createdAtVal)
    },
    // Include a username which is required.
    username: {
      type: String,
      required: true
    },
    // Include a reactions array which is an array of subdocuments defined by the ReactionSchema.
    reactions: [ReactionSchema]
  },
  {
    // Define the toJSON property to include virtuals and utilize getters.
    toJSON: {
      virtuals: true,
      getters: true
    },
    // Disable the automatic creation of an id virtual.
    id: false
  }
);

// Define a virtual on the ThoughtSchema to get the total count of reactions.
ThoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});

// Create the Thought model using the ThoughtSchema.
const Thought = model('Thought', ThoughtSchema);

// Export the Thought model.
module.exports = Thought;
