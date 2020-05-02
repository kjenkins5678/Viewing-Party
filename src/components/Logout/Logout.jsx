import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonItemDivider, IonInput, IonButton } from '@ionic/react';

function Logout(props) {
    function logout() {
        props.pass();
    }
    return(
        <IonButton slot='primary' color="secondary" onClick={logout}>
            Logout
        </IonButton>
    )
};

export default Logout;