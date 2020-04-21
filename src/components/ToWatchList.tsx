import React from 'react';
import { IonCard, IonList, IonListHeader, IonLabel, IonItem, IonAvatar  } from '@ionic/react';

const ToWatchList: React.FC = () => {
  return (
    <div className="container">
        <IonCard>
            <IonList>
            <IonListHeader>
                <IonLabel>
                <h1>To Watch</h1>
                </IonLabel>
            </IonListHeader>

            <IonItem>
                <IonAvatar slot="start">
                <img alt="placeholder" src="https://picsum.photos/100" />
                </IonAvatar>
                <IonLabel>
                <h2>Movie A</h2>
                <h3>I'm a big deal</h3>
                <p>Listen, I've had a pretty messed up day...</p>
                </IonLabel>
            </IonItem>

            <IonItem>
                <IonAvatar slot="start">
                <img alt="placeholder" src="https://picsum.photos/100" />
                </IonAvatar>
                <IonLabel>
                <h2>Movie B</h2>
                <h3>Look, kid...</h3>
                <p>I've got enough on my plate as it is, and I...</p>
                </IonLabel>
            </IonItem>

            <IonItem>
                <IonAvatar slot="start">
                <img alt="placeholder" src="https://picsum.photos/100" />
                </IonAvatar>
                <IonLabel>
                <h2>Movie C</h2>
                <h3>I can handle myself</h3>
                <p>You will remove these restraints and leave...</p>
                </IonLabel>
            </IonItem>

            <IonItem>
                <IonAvatar slot="start">
                <img alt="placeholder" src="https://picsum.photos/100" />
                </IonAvatar>
                <IonLabel>
                <h2>Movie D</h2>
                <h3>Your thoughts betray you</h3>
                <p>I feel the good in you, the conflict...</p>
                </IonLabel>
            </IonItem>
            </IonList>
        </IonCard>
      
    </div>
  );
};

export default ToWatchList;