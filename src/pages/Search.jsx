import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardContent } from '@ionic/react';
import Logout from '../components/Logout/Logout';
import '../components/Home/Home.css';


import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../components/Home/Home';
import Header from '../components/elements/Header/Header';
import Movie from '../components/Movies/Movie';
import NotFound from '../components/elements/NotFound/NotFound';




function Search(props) {
  function pass() {
    props.handleLogout();
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Search Movies or Shows</IonTitle>
          <Logout pass={pass} />
        </IonToolbar>
      </IonHeader>

      <IonContent class="outer-content">
      <Switch>
      <Route path="/" component={Home}  />
      <Route path="/:movieId" component={Movie}  />
      <Route component={NotFound} />
      </Switch>
      </IonContent>
    </IonPage>
  );
};

export default Search;
