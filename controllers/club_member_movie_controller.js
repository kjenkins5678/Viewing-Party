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

module.exports.create = (req, res) => {
  // Validate request
/*  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
*/

  console.log ('Club/Member Movie. Create'); 

  // Create a club
  const cmm = {
    fk_club_id: req.body.fk_club_id,
    fk_member_id: req.body.fk_member_id,
    movie_status: req.body.movie_status,
    title: req.body.title,
    tmdb_id: req.body.tmdb_id,
    synopsis: req.body.synopsis,
    poster_url: req.body.poster_url,
    reviews_url: req.body.reviews_url
  };

  console.log ('Club member movie. ' + cmm.tmdb_id); 

  // Save club in the database
  Club_Member_Movie.create(cmm)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error. Club/member movie create."
      });
    });
};

// **********************************************
// **********************************************

// Update a club by the id in the request
exports.update = (req, res) => {
  
};

// **********************************************
// Delete a club comment by ID
// **********************************************

module.exports.delete = (req, res) => {
  const id = req.params.id;

  Club_Member_Movie.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Movie was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete movie with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete movie with id=" + id
      });
    });
};

