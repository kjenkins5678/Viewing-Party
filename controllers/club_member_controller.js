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

module.exports.create = (req, res) => {
  // Validate request
/*  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
*/

  console.log ('Member. Create'); 

  // Create a member
  const member = {
    first_name: req.body.first_name,
    last_name: req.body.last_name, 
    email: req.body.email,
    user_id: req.body.user_id
  };

  console.log ('Member. ' + member.first_name); 

  // Save club in the database
  Club_Member.create(member)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error. Member create."
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

  Club_Member.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Member was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete member with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete member with id=" + id
      });
    });
};
