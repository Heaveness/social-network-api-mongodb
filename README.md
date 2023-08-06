# Social-Network-Api-Mongodb

![License](https://img.shields.io/badge/license-MIT-brightgreen.svg)

## Description
This is a back-end API for a social network web application where users can share their thoughts, react to friends' thoughts, and create a friend list. <br>
The API uses a NoSQL database, MongoDB, which is a popular choice for many social networks due to its speed with large amounts of data and flexibility with unstructured data. <br>
The API has CRUD functionality for users, thoughts, and reactions. <br>

Go ahead and give it a test yourself! <br>

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contribution)
- [Tests](#tests)
- [Links](#links)
- [Credits](#credits)
- [Questions](#questions)
  
## Installation
Follow these instructions: <br>
1. Git clone this repository. <br>
2. Install Node.js. <br>
3. Install necessary modules by using the command: npm install <br>
4. Use any git terminal like Git Bash or Visual Studio Code.
5. Start the server locally using the command: npm start <br>
6. Use API call software like Postman or Insomnia to interact with the database. <br>
  
## Usage
The API can be used to create, read, update, and delete users, thoughts, and reactions in a social network application. It can handle large amounts of unstructured data using MongoDB. <br>

Use API calls such as:
- <span>http:/<span>/localhost:3001/api/users
- <span>http:/<span>/localhost:3001/api/thoughts
- <span>http:/<span>/localhost:3001/api/thoughts/thoughtId*
- <span>http:/<span>/localhost:3001/api/thoughts/thoughtId*/reactions
- <span>http:/<span>/localhost:3001/api/thoughts/thoughtId*/reactions/reactionId*
- <span>http:/<span>/localhost:3001/api/users/userId*/friends/friendId*

*Replace the IDs with the with the actual proper IDs from the database.

To Create a new User:
```
Send a POST request to /api/users
with a raw JSON body:

{
    "username": "jane.smith",
    "email": "jane.smith@example.com"
}
```

To create a new Thought: Use POST request
```
Send a POST request to /api/thoughts/
with a raw JSON body:

{
    "thoughtText": "This is a new Thought!",
    "username": "jane.smith",
    "userId": "jane.smith's userID"
}
```

To update a Thought by ID: use PUT request
```
Send a PUT request to /api/thoughts/thoughtId
with a raw JSON body:

{
    "thoughtText": "This is an updated Thought!",
}
```

To create a new Reaction: use POST request
```
Send a POST request to api/thoughts/thoughtId/reactions
with a raw JSON body:

{
    "reactionBody": "Woah! This is a Reaction to that Thought!",
    "username": "john.doe"
}
```

To add a Friend to a user's Friend list: Must create two Users beforehand
```
Send a POST request to /api/users/userId/friends/friendId
replace userId with 1st userID and friendId with 2nd userId
```

## License
This project is licensed under the MIT license.
  
## Contribution
Please follow general rules for contribution and merging. Always git pull before you git push your changes. And avoid merge conflicts, please. <br>

## Tests
Use this command to test: <br>
node server.js <br>
or <br>
npm start <br>

Use API call websites like Postman or Insomnia to get the database.<br>

## Links
**Github Repo:** [Link to Github repository!](https://github.com/Heaveness/social-network-api-mongodb) <br>
**Walkthrough Video:** [Link to the Walkthrough Video!]() <br>

## Credits
**Websites:** W3schools, stackoverflow, & reddit <br>
**Instructor(s):** Ali Maqsood, Daler Singh <br>
**Assistant Instructor(s):** Shihan, Adam, Krishna, & Tareque Moatar <br>
**Institution:** University of Toronto <br>

## Questions
If you have any questions regarding the repo, please contact me at vindictuslbp@gmail.com. Or check with me through my Github profile: [Heaveness](https://github.com/Heaveness).
