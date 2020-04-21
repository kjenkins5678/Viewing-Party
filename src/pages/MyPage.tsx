import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonRow } from '@ionic/react';
import ToWatchList from '../components/ToWatchList';
import './MyPage.css';

const MyPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>My Page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">My Page</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonRow>
          <ToWatchList></ToWatchList>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default MyPage;
