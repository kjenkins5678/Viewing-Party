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
// create a new club
// **********************************************

module.exports.create = (req, res) => {

  console.log ('Club. Create'); 

  // Create a club
  const club = {
    club_name: req.body.club_name
  };

  console.log ('Club name. ' + club.club_name); 

  // Save club in the database
  Club.create(club)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error. Club create."
      });
    });

};
// **********************************************
// **********************************************

// Update a club by the id in the request
module.exports.update = (req, res) => {
  
};

// **********************************************
// Delete a club by ID
// **********************************************

module.exports.delete = (req, res) => {
  const id = req.params.id;

  Club.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Club was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete club with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete club with id=" + id
      });
    });
};

