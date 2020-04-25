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

  app.post("/api/club", club.create);

  // ********************************************
  // club members
  // ********************************************

  app.get("/api/member", club_member.findAll);

  app.get("/api/member/:id", club_member.findOne);

  app.post("/api/member", club_member.create);

  // ********************************************
  // club member maps
  // ********************************************

  app.get("/api/club_member_map", club_member_map.findAll);

  app.get("/api/member_clubs/:id", club_member_map.findMemberClubs);

  app.get("/api/club_members/:id", club_member_map.findClubMembers);

  app.post("/api/club_member_map", club_member_map.create);

  // ********************************************
  // clubs member movies  
  // ********************************************

  app.get("/api/movie", club_member_movie.findAll);

  app.get("/api/movie/:id", club_member_movie.findOne);

  app.get("/api/member_movies/:id", club_member_movie.findMemberMovies);

  app.get("/api/movie_members/:id", club_member_movie.findMovieMembers);

  app.post("/api/movie", club_member_movie.create);

  // ********************************************
  // club member movie comments
  // ********************************************

  app.get("/api/movie_comment", club_member_movie_comment.findAll);

  app.get("/api/movie_comment/:id", club_member_movie_comment.findOne);

  app.get("/api/member_movie_comments", club_member_movie_comment.findMemberMovieComments);

  app.post("/api/movie_comment", club_member_movie_comment.create);

  // ********************************************
  // club comments 
  // ********************************************

  app.get("/api/cc", club_comment.findAll);

  app.get("/api/cc/:id", club_comment.findOne);

  app.get("/api/club_cc/:id", club_comment.findClubComments);

  app.post("/api/club_cc", club_comment.create);

}
