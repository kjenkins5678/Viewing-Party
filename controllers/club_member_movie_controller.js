// **********************************************
// **********************************************

const db = require("../models");
const Club_Member_Movie = db.Club_Member_Movie;
const Op = db.Sequelize.Op;

// **********************************************
// **********************************************

// Retrieve all clubs from the database.
exports.findAll = (req, res) => {
  Club_Member_Movie.findAll({})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving club members"
      });
    });
};

module.exports.findOne = (req, res) => {
  console.log('club member movie findByID');
  const id = req.params.id;  
  Club_Member_Movie.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving movie by ID"
    });
  });
};

// Retrieve all movies linked to a member
exports.findMemberMovies = (req, res) => {
  console.log('movie findByMember');
  const id = req.params.id;  
  Club_Member_Movie.findAll({where:{fk_member_id:id}})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving club members"
      });
    });
};

// Retrieve all members linked to a movie 
exports.findMovieMembers = (req, res) => {
  console.log('movie findMovieMembers');
  const id = req.params.id;  
  Club_Member_Movie.findAll({where:{tmdb_id:id}})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving club members"
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

