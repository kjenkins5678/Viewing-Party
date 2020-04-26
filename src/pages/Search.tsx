import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardContent } from '@ionic/react';

import '../components/Home/Home.css';


import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../components/Home/Home';
import Header from '../components/elements/Header/Header';
import Movie from '../components/Movies/Movie';
import NotFound from '../components/elements/NotFound/NotFound';




const Search: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Search Movies or Shows</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent class="outer-content">
      <Route path="./../" component={Home} exact={true} />
      <Route path="/:movieId" component={Movie}  exact={true} />
      <Route component={NotFound} />

      </IonContent>
    </IonPage>
  );
};

export default Search;
