import React, {useState, useEffect} from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonIcon, IonButton } from '@ionic/react';
import ClubCard from '../components/ClubCard';
import { create } from 'ionicons/icons';
import API from '../utils/API.js';

function BcmPage() {
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
    API.getMemberMovies (18)
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

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButton slot='primary'>
              <IonIcon slot="icon-only" icon={create}></IonIcon>
          </IonButton>
          <IonTitle>BCM Page</IonTitle>
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
          <hr></hr>
          <IonButton size="small" color="warning" onClick={addAClub} >
            Add Club
          </IonButton>
          <IonButton size="small" color="warning" onClick={addAMember} >
            Add Member
          </IonButton>

      </IonContent>
    </IonPage>
  );
};

export default BcmPage;
