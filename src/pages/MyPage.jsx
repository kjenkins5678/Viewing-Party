import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol } from '@ionic/react';
import ToWatchList from '../components/ToWatchList';
import WatchedList from '../components/WatchedList';
import Logout from '../components/Logout/Logout';
import './MyPage.css';

function MyPage(props) {
  function pass() {
    props.handleLogout();
  }

  return (
    <IonPage id='my-page'>
      <IonHeader>
        <IonToolbar>
          <IonTitle>My Page</IonTitle>
          <Logout pass={pass} />
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
