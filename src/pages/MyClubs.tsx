import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import PlaceholderContainer from '../components/PlaceholderContainer';
import './MyClubs.css';

const MyClubs: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle> My Clubs</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">My Clubs</IonTitle>
          </IonToolbar>
        </IonHeader>
        <PlaceholderContainer name="My Clubs" />
      </IonContent>
    </IonPage>
  );
};

export default MyClubs;
