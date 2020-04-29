import React from 'react';
import { IonCard, IonCardHeader, IonItem, IonLabel, IonButton, IonIcon } from '@ionic/react';
import { hammer, trash } from 'ionicons/icons';

const ClubCard: React.FC = () => {
  return (
      <IonCard className="club-card">
        <IonCardHeader>
          <IonLabel>
                <h2>Club Name Here</h2>
          </IonLabel>
        </IonCardHeader>
        <IonItem routerLink={`/club/club_id_here`}>
          <IonButton>
            <IonIcon slot="icon-only" icon={hammer} />
          </IonButton>
        </IonItem>
        <IonItem routerLink={`/club/delete/club_id_here`}>
          <IonButton>
            <IonIcon icon={trash} />
          </IonButton>
        </IonItem>

      </IonCard>
  );
};

export default ClubCard;