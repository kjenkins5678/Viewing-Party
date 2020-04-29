import React from 'react';
import { IonCard, IonCardHeader, IonItem, IonLabel, IonButton, IonIcon } from '@ionic/react';
import { hammer, trash } from 'ionicons/icons';

const EditClubCard: React.FC = ({ children }) => {
  return (
      <IonCard className="club-card">
        <IonCardHeader>
          <IonLabel>
                <h2>{children}</h2>
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

export default EditClubCard;