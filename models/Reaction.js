// Import the Schema and Types objects from Mongoose.
const { Schema, Types } = require('mongoose');
// Import the dateFormat function from the utils directory.
const dateFormat = require('../utils/dateFormat');

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

// Export the ReactionSchema.
module.exports = ReactionSchema;
