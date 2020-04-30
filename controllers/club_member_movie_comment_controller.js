// **********************************************
// **********************************************

const db = require("../models");
const Club_Member_Movie_Comment = db.Club_Member_Movie_Comment;
const Op = db.Sequelize.Op;

// **********************************************
// **********************************************

// Retrieve all movie comments from the database.
module.exports.findAll = (req, res) => {
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

// retrieve one movie comment from the db by ID 
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

// Retrieve a member and his/her comments
module.exports.findTMDBIDComments = (req, res) => {
  console.log("club_member_movie_comment.findTMDBIDComments"); 
  const tmdb_id = req.params.id; 
  var query = `select cmmc.comment, cmmc.createdAt as comment_dt, cmm.id as movie_id, cmm.movie_status, `
    + `cmm.title, cmm.tmdb_id, cmm.synopsis, cmm.poster_url, cmm.reviews_url, cmm.fk_member_id, `
    + `cm.first_name, cm.last_name, concat (cm.first_name, ' ', cm.last_name) as full_name, c.club_name `
    + `from club_member_movie_comment cmmc, club c, club_member cm, club_member_movie cmm ` 
    + `where cmmc.fk_movie_id = cmm.id and cmmc.fk_member_id = cmm.fk_member_id and cmmc.fk_club_id = cmm.fk_club_id ` 
    + `and c.id = cmm.fk_club_id and cm.id = cmm.fk_member_id and cmm.tmdb_id = ${tmdb_id}`; 
  db.mySqlConnection.query(query, 
    function(err, results, fields) {
      console.log(results); 
      res.send(results); 
    } 
  );
};

// **********************************************
// **********************************************

module.exports.create = (req, res) => {

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
// Delete a club comment by ID
// **********************************************

module.exports.delete = (req, res) => {
  const id = req.params.id;

  Club_Member_Movie_Comment.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Club movie comment was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete club movie comment with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete club movie comment with id=" + id
      });
    });
};
