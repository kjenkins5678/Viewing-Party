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

module.exports.create = (req, res) => {
  // Validate request
/*  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
*/

  console.log ('Club Comment. Create'); 

  // Create a club comment
  const clubComment = {
    comment: req.body.comment,
    fk_club_id: req.body.fk_club_id,
    fk_member_id: req.body.fk_member_id

  };

  console.log ('Club name. ' + clubComment.comment); 

  // Save club in the database
  Club_Comment.create(clubComment)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error. Club comment create."
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

