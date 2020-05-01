import React from "react";
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/react';
import { useForm } from "react-hook-form";
import API from '../utils/API'

import "./NewClub.css";

function NewClub() {

    function addAClub (data) {
        console.log ("entering addAClub"); 
        API.addAClub({
          club_name: data
        })
          .then(res => console.log(res))
          .catch(err => console.log(err));
      }

    const { register, handleSubmit} = useForm();
    const onSubmit = data => {
        console.log(data);
        addAClub(data.club_name)
    }; // your form submit function which will invoke after successful validation

    return (
        <IonPage id='new-club'>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Create New Club</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label>New Club Name</label>
                    <input name="club_name" placeholder="name" ref={register} />
                    <input type="submit" />
                </form>
            </IonContent>
        </IonPage>
        
    );
}

export default NewClub;