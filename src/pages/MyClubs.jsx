import React, { useEffect, useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonIcon, IonButton } from '@ionic/react';
import EditClubCard from '../components/EditClubCard';
import API from '../utils/API'
import Logout from '../components/Logout/Logout';
import { create } from 'ionicons/icons';
// import PlaceholderContainer from '../components/PlaceholderContainer';
import './MyClubs.css';


function MyClubs(props) {

// Setting our component's initial state
const [clubs, setClubs] = useState([])

// Load all books and store them with setBooks
useEffect(() => {
  loadClubs()
}, [])

// Loads all books and sets them to books
function loadClubs() {
  API.getClubs()
    .then(res => 
      setClubs(res.data)
    )
    .catch(err => console.log(err));
};

function pass() {
  props.handleLogout();
}

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButton slot='primary' routerLink={"/newclub"}>
              <IonIcon slot="icon-only" icon={create}></IonIcon>
          </IonButton>
          <IonTitle>My Clubs</IonTitle>
          <Logout pass={pass} />
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">My Clubs</IonTitle>
          </IonToolbar>
        </IonHeader>
          {clubs.length ? (
              <div>
                {clubs.map(club => {
                  // console.log(club['club_name'])
                  return (
                    <EditClubCard 
                      key={club["id"]} 
                      club_name={club['club_name']}
                    >  
                    </EditClubCard>
                  );
                })}
              </div>
            ) : (
              <h3>No Results to Display</h3>
            )}
        {/* <PlaceholderContainer name="My Clubs" /> */}
      </IonContent>
    </IonPage>
  );
};

export default MyClubs;
