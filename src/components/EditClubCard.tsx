import React, { FunctionComponent, HTMLAttributes } from 'react';
import { IonCard, IonCardHeader, IonItem, IonLabel, IonButton, IonIcon } from '@ionic/react';
import { hammer, trash } from 'ionicons/icons';

type CardProps = {
  club_name?: string,
  clubId?: number,
}

const EditClubCard: FunctionComponent<CardProps> = (CardProps) => {

  return (
    <IonCard className="club-card">
      <IonCardHeader>
        <IonLabel>
              <h2>{CardProps.club_name}</h2>
        </IonLabel>
      </IonCardHeader>
      <IonItem routerLink={`/club/club_id_here`}>
        <IonButton>
          <IonIcon slot="icon-only" icon={hammer} />
        </IonButton>
      </IonItem>
      <IonItem>
        <IonButton data-value={CardProps.clubId}>
          <IonIcon icon={trash} />
        </IonButton>
      </IonItem>
    </IonCard>
  );
};

export default EditClubCard;