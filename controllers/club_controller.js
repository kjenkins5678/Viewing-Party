// **********************************************
// **********************************************

const db = require("../models");
const Club = db.Club;
const Op = db.Sequelize.Op;

// **********************************************
// **********************************************

// Retrieve all clubs from the database.
module.exports.findAll = (req, res) => {
  console.log("club.findAll"); 
  Club.findAll({})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving clubs"
      });
  });
};

// Find a single club with an id
module.exports.findOne = (req, res) => {
  console.log("club.findByPk");
  const id = req.params.id;  
  Club.findByPk(id) 
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving clubs."
    });
  });
};


// **********************************************
// **********************************************

// Create and Save a new club
module.exports.create = (req, res) => {
  
};

// **********************************************
// **********************************************

// Update a club by the id in the request
module.exports.update = (req, res) => {
  
};

// **********************************************
// **********************************************

// Delete a club with the specified id in the request
module.exports.delete = (req, res) => {
  
};

// Delete all clubs from the database.
module.exports.deleteAll = (req, res) => {
  
};

