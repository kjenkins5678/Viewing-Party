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

  app.get("/api/member", club_member.findAll);

  app.get("/api/member/:id", club_member.findOne);

  // ********************************************
  // club member maps
  // ********************************************

  app.get("/api/club_member_map", club_member_map.findAll);

  app.get("/api/club_member_map/:id", club_member_map.findOneMember);

  // ********************************************
  // clubs member movies  
  // ********************************************

  app.get("/api/movie", club_member_movie.findAll);

  app.get("/api/movie/:id", club_member_movie.findOne);

  app.get("/api/movie_by_member/:id", club_member_movie.findAllByMember);

  // ********************************************
  // club member movie comments
  // ********************************************

  app.get("/api/movie_comment", club_member_movie_comment.findAll);

  app.get("/api/movie_comment/:id", club_member_movie_comment.findOne);

  app.get("/api/movie_comment_by_movie", club_member_movie_comment.findComments);

  // ********************************************
  // club comments 
  // ********************************************

  app.get("/api/club_comment", club_comment.findAll);

  app.get("/api/club_comment/:id", club_comment.findOne);

  app.get("/api/club_comment_by_club/:id", club_comment.findComments);

}
