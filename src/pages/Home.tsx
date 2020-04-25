import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import PlaceholderContainer from '../components/PlaceholderContainer';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Viewing Party</IonTitle>
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