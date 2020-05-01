import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import PlaceholderContainer from '../components/PlaceholderContainer';
import Logout from '../components/Logout/Logout';

function Home(props) {
  function pass() {
    props.handleLogout();
  }
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Viewing Party</IonTitle>
          <Logout pass={pass} />
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Viewing Party</IonTitle>
          </IonToolbar>
        </IonHeader>
        <PlaceholderContainer name="Viewing Party" />
      </IonContent>
    </IonPage>
  );
};

export default Home;