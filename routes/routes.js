// **********************************************
// **********************************************

module.exports = app => {

  const club = require("../controllers/club_controller.js");
  const club_member = require("../controllers/club_member_controller.js");
  const club_member_map = require("../controllers/club_member_map_controller.js");
  const club_member_movie = require("../controllers/club_member_movie_controller.js");
  const club_member_movie_comment = require("../controllers/club_member_movie_comment_controller.js");
  const club_comment = require("../controllers/club_comment_controller.js");

//  var router = require("express").Router();

  // ********************************************
  // clubs 
  // ********************************************

  app.get("/api/club", club.findAll); 

  app.get("/api/club/:id", club.findOne); 

  // ********************************************
  // club members
  // ********************************************

  app.get("/api/club_member", club_member.findAll);

  // ********************************************
  // club member maps
  // ********************************************

  app.get("/api/club_member_map", club_member_map.findAll);

  // ********************************************
  // clubs member movies  
  // ********************************************

  app.get("/api/club_member_movie", club_member_movie.findAll);

  // ********************************************
  // club member movie comments
  // ********************************************

  app.get("/api/club_member_movie_comment", club_member_movie_comment.findAll);

  // ********************************************
  // club comments 
  // ********************************************

  app.get("/api/club_comment", club_comment.findAll);

}
