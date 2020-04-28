import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonIcon, IonButton } from '@ionic/react';
import EditClubCard from '../components/EditClubCard';
import { create } from 'ionicons/icons';
// import PlaceholderContainer from '../components/PlaceholderContainer';
import './MyClubs.css';

const MyClubs: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButton slot='primary'>
              <IonIcon slot="icon-only" icon={create}></IonIcon>
          </IonButton>
          <IonTitle>My Clubs</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">My Clubs</IonTitle>
          </IonToolbar>
        </IonHeader>
          <EditClubCard></EditClubCard>
        {/* <PlaceholderContainer name="My Clubs" /> */}
      </IonContent>
    </IonPage>
  );
};

export default MyClubs;
