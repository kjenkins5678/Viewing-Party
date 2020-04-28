import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol } from '@ionic/react';
import ToWatchList from '../components/ToWatchList';
import WatchedList from '../components/WatchedList';
import './MyPage.css';

const MyPage: React.FC = () => {
  return (
    <IonPage id='my-page'>
      <IonHeader>
        <IonToolbar>
          <IonTitle>My Page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol>
              <ToWatchList></ToWatchList>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <WatchedList></WatchedList>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default MyPage;
