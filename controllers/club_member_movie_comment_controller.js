// **********************************************
// **********************************************

const db = require("../models");
const Club_Member_Movie_Comment = db.Club_Member_Movie_Comment;
const Op = db.Sequelize.Op;

// **********************************************
// **********************************************

// Retrieve all clubs from the database.
exports.findAll = (req, res) => {
  Club_Member_Movie_Comment.findAll({})
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
  console.log('club member movie comment findByID');
  const id = req.params.id;  
  Club_Member_Movie_Comment.findByPk(id)
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

// Retrieve a club and its comments
module.exports.findMemberMovieComments = (req, res) => {
  console.log("club_member_movie_comment.findComments"); 
  const id = req.params.id; 
  Club_Member_Movie_Comment.findAll({where: {fk_movie_id:id}})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving clubs"
      });
  });
};

// **********************************************
// **********************************************

module.exports.create = (req, res) => {
  // Validate request
/*  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
*/

  console.log ('Club/Member Comment Movie. Create'); 

  // Create a club
  const cmmc = {
    comment: req.body.comment,
    fk_club_id: req.body.fk_club_id,
    fk_member_id: req.body.fk_member_id,
    fk_movie_id: req.body.fk_movie_id};

  console.log ('Club member movie. ' + cmmc.tmdb_id); 

  // Save club in the database
  Club_Member_Movie_Comment.create(cmmc)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error. Club/member comment create."
      });
    });
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

