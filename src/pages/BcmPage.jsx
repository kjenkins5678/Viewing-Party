import React, {useState, useEffect} from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonIcon, IonButton } from '@ionic/react';
import ClubCard from '../components/ClubCard';
import { create } from 'ionicons/icons';
import API from '../utils/API.js';
import Logout from '../components/Logout/Logout';

function BcmPage(props) {

  function pass() {
    props.handleLogout();
  }
//const BcmPage: React.FC = () => {

  //useEffect(() => {    

  function getAllClubs () {
    console.log ('entering getClubs'); 
    API.getClubs()  
      .then(res => 
      console.log(res)
        //setBooks(res.data)
      )
      .catch(err => console.log(err));
  }

  function getAClub () {
    console.log ('entering getAClub'); 
    API.getAClub(7)  
      .then(res => 
      console.log(res)
        //setBooks(res.data)
      )
      .catch(err => console.log(err));
  }

  function addAClub () {
    console.log ("entering addAClub"); 
    API.addAClub({
      club_name: 'testClub200428'
    })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  function deleteAClub () {
    console.log ("entering deleteAClub"); 
    API.deleteAClub(3)  
      .then(res => 
      console.log(res)
      )
      .catch(err => console.log(err));
  }

  function getAllMembers () {
    console.log ('entering getMembers'); 
    API.getMembers()  
      .then(res => 
      console.log(res)
        //setBooks(res.data)
      )
      .catch(err => console.log(err));
  }

  function getAMember () {
    console.log ('entering getAMember'); 
    API.getAMember(23)  
      .then(res => 
      console.log(res)
        //setBooks(res.data)
      )
      .catch(err => console.log(err));
  }

  function addAMember () {
    console.log ("entering addAMember"); 
    API.addAMember({
      first_name: 'LeBron',
      last_name: 'James', 
      email: 'lbj@email.com',
      user_id: 'lbjames', 
      password: 'pwd'
    })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  function deleteAMember () {
    console.log ("entering deleteAMember"); 
    API.deleteAMember(9)  
      .then(res => 
      console.log(res)
      )
      .catch(err => console.log(err));
  }

  function getMemberClubs () {
    console.log ('entering getMemberClubs'); 
    API.getMemberClubs(23)
      .then(res => 
      console.log(res)
        //setBooks(res.data)
      )
      .catch(err => console.log(err));
  }

  function getClubMembers () {
    console.log ('entering getClubMembers'); 
    API.getClubMembers (8)
      .then(res => 
      console.log(res)
        //setBooks(res.data)
      )
      .catch(err => console.log(err));
  }

  function addAMemberClub () {
    console.log ("entering addAMemberClub"); 
    API.addAMemberClub({
      fk_member_id: '8',
      fk_club_id: '1'
    })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  function deleteAMemberClub () {
    console.log ("entering deleteAMemberClub"); 
    API.deleteAMemberClub(15)  
      .then(res => 
      console.log(res)
      )
      .catch(err => console.log(err));
  }

  function getAllMovies(){
    console.log ('entering getMovies'); 
    API.getMovies()
      .then(res => 
      console.log(res)
        //setBooks(res.data)
      )
      .catch(err => console.log(err));
  }

  function getMemberMovies (){
    console.log ('entering getMemberMovies'); 
    API.getMemberMovies (1)
      .then(res => 
      console.log(res)
        //setBooks(res.data)
      )
      .catch(err => console.log(err));
  }

  function getMovieMembers () {
    console.log ('entering getMovieMembers'); 
    API.getMovieMembers (8)
      .then(res => 
      console.log(res)
        //setBooks(res.data)
      )
      .catch(err => console.log(err));
  }

  function addAMemberMovie () {
    console.log ("entering addAMemberMovie"); 
    API.addAMemberMovie({
      fk_club_id:"1",
      fk_member_id:"1",
      movie_status: "NEW",
      title: "Project 3",
      tmdb_id: "99",
      synopsis: "Genre: HORROR",
      poster_url: "www.posterurl.com",
      reviews_url: "www.reviewsurl.com"
    })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  function getAllComments () {
    console.log ('entering getComments'); 
    API.getComments()
      .then(res => 
      console.log(res)
        //setBooks(res.data)
      )
      .catch(err => console.log(err));
  }

  function getAComment () {
    console.log ("entering getAComment"); 
    API.getAComment(31)
      .then(res => 
      console.log(res)
        //setBooks(res.data)
      )
      .catch(err => console.log(err));
  }

  function getClubComments (){
    console.log ('entering getClubComments'); 
    API.getClubComments (7)
      .then(res => 
      console.log(res)
        //setBooks(res.data)
      )
      .catch(err => console.log(err));
  }

  function addAClubComment (){
    console.log ('entering addAClubComment'); 
    API.addAClubComment({
      	comment: "Club comment 200428 #1",
        fk_club_id: "1",
        fk_member_id: "2"
    })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  function getAllMovieComments(){
    console.log ('entering getMovieComments'); 
    API.getMovieComments()
      .then(res => 
      console.log(res)
        //setBooks(res.data)
      )
      .catch(err => console.log(err));
  }

  function getAMovieComment(){
    console.log ('entering getAMovieComment'); 
    API.getAMovieComment(2)
      .then(res => 
      console.log(res)
      )
      .catch(err => console.log(err));
  }

  function getTMDBIDComments(){
    console.log ('entering getTMDBIDComments'); 
    API.getTMDBIDComments(1)
      .then(res => 
      console.log(res)
      )
      .catch(err => console.log(err));
  }

  function addAMovieComment (){
    console.log ('entering addAMovieComment'); 
    API.addAMovieComment({
      	comment: "Movie comment 200429 #1",
        fk_club_id: "2",
        fk_member_id: "1", 
        fk_movie_id: "1"
    })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButton slot='primary'>
              <IonIcon slot="icon-only" icon={create}></IonIcon>
          </IonButton>
          <IonTitle>BCM Page</IonTitle>
          <Logout pass={pass} />
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">BCM Page</IonTitle>
          </IonToolbar>
        </IonHeader>

          <ClubCard></ClubCard>

          {/* <PlaceholderContainer name="My Clubs" /> */}

          <IonButton size="small" color="warning" onClick={getAllClubs} >
            Clubs
          </IonButton>
          <IonButton size="small" color="warning" onClick={getAClub} >
            One Club
          </IonButton>
          <IonButton size="small" color="warning" onClick={getAllMembers} >
            Members
          </IonButton>
          <IonButton size="small" color="warning" onClick={getAMember} >
            One Member
          </IonButton>
          <IonButton size="small" color="warning" onClick={getMemberClubs} >
            Member Clubs
          </IonButton>
          <IonButton size="small" color="warning" onClick={getClubMembers} >
            Club Members
          </IonButton>
          <IonButton size="small" color="warning" onClick={getAllMovies} >
            All Movies
          </IonButton>
          <IonButton size="small" color="warning" onClick={getMemberMovies} >
            Member Movies
          </IonButton>
          <IonButton size="small" color="warning" onClick={getMovieMembers} >
            Movie Members
          </IonButton>
          <IonButton size="small" color="warning" onClick={getAllComments} >
            All Comments
          </IonButton>
          <IonButton size="small" color="warning" onClick={getAComment} >
            One Comment
          </IonButton>
          <IonButton size="small" color="warning" onClick={getClubComments} >
            Club Comments
          </IonButton>
          <IonButton size="small" color="warning" onClick={getAllMovieComments} >
            All Movie Comments
          </IonButton>
          <IonButton size="small" color="warning" onClick={getAMovieComment} >
            One Movie Comment
          </IonButton>
          <IonButton size="small" color="warning" onClick={getTMDBIDComments} >
            TMDB ID Comments
          </IonButton>

          <hr></hr>
          <IonButton size="small" color="warning" onClick={addAClub} >
            Add Club
          </IonButton>
          <IonButton size="small" color="warning" onClick={addAMember} >
            Add Member
          </IonButton>
          <IonButton size="small" color="warning" onClick={addAMemberClub} >
            Add Member Club Map
          </IonButton>
          <IonButton size="small" color="warning" onClick={addAMemberMovie} >
            Add Member Movie
          </IonButton>
          <IonButton size="small" color="warning" onClick={addAClubComment} >
            Add Club Comment
          </IonButton>
          <IonButton size="small" color="warning" onClick={addAMovieComment} >
            Add Movie Comment
          </IonButton>
          <hr></hr>
          <IonButton size="small" color="warning" onClick={deleteAClub} >
            Delete Club
          </IonButton>
          <IonButton size="small" color="warning" onClick={deleteAMember} >
            Delete Member
          </IonButton>
          <IonButton size="small" color="warning" onClick={deleteAMemberClub} >
            Delete Member Club Map
          </IonButton>

      </IonContent>
    </IonPage>
  );
};

export default BcmPage;
