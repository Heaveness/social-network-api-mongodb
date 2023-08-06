// Import the mongoose package.
const mongoose = require('mongoose');

// Connect to the MongoDB database using mongoose. 
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/socialDB', {
  // The useNewUrlParser option tells mongoose to use the new URL string parser.
  useNewUrlParser: true,
  // The useUnifiedTopology option is to use the new Server Discover and Monitoring engine.
  useUnifiedTopology: true
});

// Export the mongoose connection. This will be used in other parts of our application to interact with our MongoDB database.
module.exports = mongoose.connection;