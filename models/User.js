// Import the Schema and model objects from Mongoose.
const { Schema, model } = require('mongoose');

// Define the UserSchema.
const UserSchema = new Schema({
  // Include a username which is unique, required, and will be trimmed.
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  // Include an email which is unique, required, and must match a regular expression for an email address.
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!']
  },
  // Include a thoughts array which consists of ObjectId's that refer to the Thought model.
  thoughts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Thought'
    }
  ],
  // Include a friends array which consists of ObjectId's that refer to the User model.
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  ]
},
{
  // Define the toJSON property to include virtuals.
  toJSON: {
    virtuals: true,
  },
  // Disable the automatic creation of an id virtual.
  id: false
});

// Define a virtual on the UserSchema to get the total count of friends.
UserSchema.virtual('friendCount').get(function() {
  return this.friends.length;
});

// Create the User model using the UserSchema.
const User = model('User', UserSchema);

// Export the User model.
module.exports = User;
