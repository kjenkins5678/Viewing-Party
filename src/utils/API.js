import axios from "axios";

export default {

  getClubs: function() {
    return axios.get("/api/club"); 
  }, 
  getAClub: function(id){
    return axios.get("/api/club/" + id);
  }, 
  getMembers: function() {
    return axios.get("/api/member");
  },
  getAMember: function(id){
    return axios.get("/api/member/" + id); 
  }, 
  getMemberClubs: function (id){
    return axios.get("/api/member_clubs/" + id);
  },
  getClubMembers: function (id){
    return axios.get("/api/club_members/" + id); 
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
  getComments: function (){
    return axios.get("/api/cc");
  },
  getAComment: function (id) {
    return axios.get("/api/cc/" + id);
  },
  getClubComments: function (id) {
    return axios.get("/api/club_cc/" + id);
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
