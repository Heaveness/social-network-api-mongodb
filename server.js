// Import the express, database configuration, and routes modules.
const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

// Set the port number for the server.
const PORT = process.env.PORT || 3001;

// Initialize an instance of the Express application.
const app = express();

// Configure Express to parse incoming JSON and urlencoded data.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Use the routes defined in the routes module.
app.use(routes);

// When the database connection is open, start the server.
db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
