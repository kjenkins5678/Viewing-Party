import axios from "axios";

export default {

  getClubs: function() {
    return axios.get("/api/club"); 
  }, 
  getAClub: function(id){
    return axios.get("/api/club/" + id);
  }, 
  addAClub: function(club) {
    return axios.post("/api/club", club);
  }, 
  getMembers: function() {
    return axios.get("/api/member");
  },
  getAMember: function(id){
    return axios.get("/api/member/" + id); 
  }, 
  addAMember: function (member){
    console.log ("API. addAMember"); 
    console.log ("fname " + member.first_name); 
    return axios.post("/api/member", member);
  },
  getMemberClubs: function (id){
    return axios.get("/api/member_clubs/" + id);
  },
  getClubMembers: function (id){
    return axios.get("/api/club_members/" + id); 
  }, 
  addAMemberClub: function (memberMap){
    console.log ("API. addMemberMap " + memberMap.fk_member_id);
    return axios.post("/api/club_member_map", memberMap);
  },
  getMovies: function () {
    return axios.get("/api/movie");
  },
  getMemberMovies: function (id) {
    return axios.get("/api/member_movies/" + id);
  }, 
  getMovieMembers: function (id) {
    return axios.get("/api/movie_members/" + id);
  }, 
  addAMemberMovie: function (memberMovie){
    console.log ("API. addAMemberMovie " + memberMovie.title);
    return axios.post("/api/movie", memberMovie);
  },
  getComments: function (){
    return axios.get("/api/cc");
  },
  getAComment: function (id) {
    return axios.get("/api/cc/" + id);
  },
  getClubComments: function (id) {
    return axios.get("/api/club_cc/" + id);
  }, 
  addAClubComment: function (comment) {
    return axios.post("api/club_cc/", comment)
  }
/*

  app.get("/api/club_member_map", club_member_map.findAll);

  app.get("/api/movie/:id", club_member_movie.findOne);

  app.get("/api/movie_comment", club_member_movie_comment.findAll);

  app.get("/api/movie_comment/:id", club_member_movie_comment.findOne);

  app.get("/api/member_movie_comments", club_member_movie_comment.findMemberMovieComments);


*/

}; 
   




/*
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};

*/ 
