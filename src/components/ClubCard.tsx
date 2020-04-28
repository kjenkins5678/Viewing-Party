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
      </IonCard>
  );
};

export default ClubCard;