import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonGrid, IonRow, IonCol } from '@ionic/react';
import './LoginorSignUp.css';

function LoginorSignUp() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Viewing Party</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
           <IonRow className="ion-justify-content-center">
               <IonButton expand="block" color="secondary" routerLink="/login">Login</IonButton>
            </IonRow> 

            <IonRow className="ion-justify-content-center">
               <IonButton expand="block" color="secondary" routerLink="/signup">Sign Up</IonButton>
            </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default LoginorSignUp;