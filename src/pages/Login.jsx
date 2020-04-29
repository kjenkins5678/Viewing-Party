import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonGrid, IonRow, IonCol, IonList, IonItem, IonItemDivider, IonInput, IonLabel } from '@ionic/react';
import axios from 'axios';

function Login(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function callPassport() {
      axios.post('/api/login', {
        user_id: username,
        password: password
      })
      .then(function(response) {
        console.log(response.data);
        props.handleLogin(response);
      })
      .catch(function(err) {
        console.log(err);
      })
    }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Viewing Party</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
          <h1>Sign In</h1>
        <IonList>
          <IonItemDivider>Username</IonItemDivider>
          <IonItem>
            <IonInput value={username} required="true" placeholder="Enter Username" id="username" autocomplete="on" clear-input="true" onIonChange={e => setUsername(e.detail.value)}></IonInput>
          </IonItem>

          <IonItemDivider>Password</IonItemDivider>
          <IonItem>
            <IonInput value={password} required="true" placeholder="Enter Password" id="password" type="password" autocomplete="on" clear-input="true" onIonChange={e => setPassword(e.detail.value)}></IonInput>
          </IonItem>

          <IonItemDivider></IonItemDivider>
          <IonItem>
              <IonButton expand="block" color="secondary" onClick={callPassport}>Login</IonButton>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Login;