import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Search.css';

const Search: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Search Movies or Shows</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Search Movies or Shows</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Search Movies or Shows" />
      </IonContent>
    </IonPage>
  );
};

export default Search;
