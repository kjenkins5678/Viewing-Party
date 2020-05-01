import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonItemDivider, IonInput, IonButton } from '@ionic/react';
import API from '../utils/API';

function SignUp() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSignUp() {
    console.log(firstName);
    console.log(lastName);
    console.log(email);
    console.log(username);
    console.log(password);
    API.addAMember({
      first_name: firstName,
      last_name: lastName,
      email: email,
      user_id: username,
      password: password
    })
    .then(function(response) {
      console.log(response);
      window.location.replace('/login');
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
          <IonItemDivider>First Name</IonItemDivider>
          <IonItem>
            <IonInput value={firstName} required="true" placeholder="Enter First Name" id="firstName" autocomplete="on" clear-input="true" onIonChange={e => setFirstName(e.detail.value)}></IonInput>
          </IonItem>

          <IonItemDivider>Last Name</IonItemDivider>
          <IonItem>
            <IonInput value={lastName} required="true" placeholder="Enter Last Name" id="lastName" autocomplete="on" clear-input="true" onIonChange={e => setLastName(e.detail.value)}></IonInput>
          </IonItem>

          <IonItemDivider>Email</IonItemDivider>
          <IonItem>
            <IonInput value={email} required="true" placeholder="Enter Email" id="email" type="email" pattern="email" autocomplete="on" clear-input="true" onIonChange={e => setEmail(e.detail.value)}></IonInput>
          </IonItem>

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
              <IonButton expand="block" color="secondary" onClick={handleSignUp}>Sign Up</IonButton>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default SignUp;