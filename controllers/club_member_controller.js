// **********************************************
// **********************************************

const db = require("../models");
const Club_Member = db.Club_Member;
const Op = db.Sequelize.Op;

// **********************************************
// **********************************************

// Retrieve all club members from the database.
module.exports.findAll = (req, res) => {
  console.log('club member findAll');
  Club_Member.findAll({})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving all club members"
    });
  });
};

module.exports.findOne = (req, res) => {
  console.log('club member findByID');
  const id = req.params.id;  
  Club_Member.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving members by club"
    });
  });
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

