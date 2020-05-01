import React from 'react';
import { IonCard, IonList, IonListHeader, IonLabel, IonItem, IonAvatar  } from '@ionic/react';

function ToWatchList(props) {
    let movies = props.toWatch
    let movieItems = movies.map((movie) => {
        return(
            <IonItem>
                <IonAvatar slot="start">
                <img alt={movie.title} src={movie.poster_url} />
                </IonAvatar>
                <IonLabel>
                <h2>{movie.title}</h2>
                <h3>{movie.synopsis}</h3>
                </IonLabel>
            </IonItem>
        )
    });

  return (
    <div id="to-watch-list">
        <IonCard>
            <IonList>
            <IonListHeader>
                <IonLabel>
                <h1>To Watch</h1>
                </IonLabel>
            </IonListHeader>

            {movieItems}

            </IonList>
        </IonCard>
      
    </div>
  );
};

export default ToWatchList;