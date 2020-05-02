import React, { useState } from 'react';
import { IonCard, IonCardHeader, IonItem, IonLabel, IonButton, IonIcon } from '@ionic/react';
import { hammer, trash } from 'ionicons/icons';
import API from '../utils/API'

function EditClubCard(CardProps) {
  const [deleteClicked, setDeleteClicked] = useState(false);

  function deleteAClub (id) {
    console.log ("entering deleteAClub", id); 
    setDeleteClicked(!deleteClicked)
    API.deleteAClub(id)  
      .then(res => 
      console.log(res)
      )
      .catch(err => console.log(err));
  }

  return (
    <IonCard className="club-card">
      <IonCardHeader>
        <IonLabel>
              <h2>{CardProps.club_name}</h2>
        </IonLabel>
      </IonCardHeader>
      <IonItem routerLink={`/club/edit/${CardProps.clubId}`}>
        <IonButton>
          <IonIcon slot="icon-only" icon={hammer} />
        </IonButton>
      </IonItem>
      <IonItem>
        <IonButton onClick={() => deleteAClub(CardProps.clubId)}>
          <IonIcon icon={trash} />
        </IonButton>
      </IonItem>
    </IonCard>
  );
};

export default EditClubCard;