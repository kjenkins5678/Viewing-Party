// **********************************************
// **********************************************

const db = require("../models");
const Club_Member_Map = db.Club_Member_Map;
const Op = db.Sequelize.Op;

// **********************************************
// **********************************************

// Retrieve all club/member maps
module.exports.findAll = (req, res) => {
  Club_Member_Map.findAll({})
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

// Find all members in a club  
module.exports.findClubMembers = (req, res) => {
  console.log('club member map findClubMembers');
  const id = req.params.id;  
  var query = `select cm.* from club_member cm, club_member_map cmm `
    + `where cm.id = cmm.fk_member_id and cmm.fk_club_id = ${id}`; 
  db.mySqlConnection.query(query, 
    function(err, results, fields) {
      console.log(results); // results contains rows returned by server
      res.send(results); 
    } 
  );
};

// Find all clubs a member is in 
module.exports.findMemberClubs = (req, res) => {
  console.log('club member map findByMember');
  const id = req.params.id;  
  var query = `select c.id as club_id, c.club_name, cmm.fk_member_id as member_id, cmm.linked_at from club c, club_member_map cmm `
    + `where cmm.fk_club_id = c.id and cmm.fk_member_id = ${id}`; 
  db.mySqlConnection.query(query, 
    function(err, results, fields) {
      console.log(results); // results contains rows returned by server
      res.send(results); 
    } 
  );
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

  console.log ('Club/Member Map. Create'); 

  // Create a club
  const cmm = {
    fk_member_id: req.body.fk_member_id,
    fk_club_id: req.body.fk_club_id,
    linked_at: new Date()
  };

  console.log ('Club name. ' + cmm.fk_member_id); 

  // Save club in the database
  Club_Member_Map.create(cmm)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error. Club/member map create."
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

  Club_Member_Map.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Club member map was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete club member map with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete club member map with id=" + id
      });
    });
};
