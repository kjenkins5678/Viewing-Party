// **********************************************
// **********************************************

const db = require("../models");
const Club_Comment = db.Club_Comment;
const Op = db.Sequelize.Op;

// **********************************************
// **********************************************

// Retrieve all clubs from the database.
module.exports.findAll = (req, res) => {
  console.log("CC. findAll"); 
  Club_Comment.findAll({})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error CC findAll."
      });
    });
};

// Retrieve a club and its comments
module.exports.findOne = (req, res) => {
  console.log("CC findOne"); 
  const id = req.params.id; 
  Club_Comment.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Error CC findAll"
      });
  });
};

// Retrieve a club and its comments
module.exports.findClubComments = (req, res) => {
  console.log("club_comment.findClubComments"); 
  const id = req.params.id; 
  Club_Comment.findAll({where: {fk_club_id:id}})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Error CC findClubComments"
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

