// **********************************************
// **********************************************

const db = require("../models");
const Club = db.Club;
const Op = db.Sequelize.Op;

// **********************************************
// **********************************************

// Retrieve all clubs from the database.
exports.findAll = (req, res) => {
  Club.findAll({})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving clubs"
      });
    });
};

// Find all published clubs
exports.findAllPublished = (req, res) => {
  
};

// Find a single club with an id
exports.findOne = (req, res) => {
  
};

// **********************************************
// **********************************************

// Create and Save a new club
exports.create = (req, res) => {
  
};

// **********************************************
// **********************************************

// Update a club by the id in the request
exports.update = (req, res) => {
  
};

// **********************************************
// **********************************************

// Delete a club with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all clubs from the database.
exports.deleteAll = (req, res) => {
  
};

