import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonGrid, IonRow, IonCol, withIonLifeCycle } from '@ionic/react';
import './LoginorSignUp.css';

class LoginorSignUp extends React.Component {
  constructor(props) {
    super(props)

  }

  ionViewWillEnter() {
    console.log(this.props.loggedIn);
    console.log(this.props.currentUserID);
  }

  render() {
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
  }
};

export default withIonLifeCycle(LoginorSignUp);