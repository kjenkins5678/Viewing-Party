import React, { useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { search, personCircle, people, home } from 'ionicons/icons';
import axios from 'axios';
import MyClubs from './pages/MyClubs';
import Search from './pages/Search';
import MyPage from './pages/MyPage';
import Home from './pages/Home';
import LoginorSignUp from './pages/LoginorSignUp';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import BcmPage from './pages/BcmPage';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {loggedIn: false, currentUserID: null}

    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(response) {
    this.setState({
      currentUserID: response.data
    });
    console.log(this.state.currentUserID);
    this.setState({
      loggedIn: true
    });
  }

  render() {
    return(
      <IonApp>
        <IonReactRouter>
          <IonTabs>
            <IonRouterOutlet>
              <Route exact path="/bcm" render={(props) => this.state.loggedIn ? <BcmPage /> : <Redirect to='/' />} />
              <Route exact path="/home" render={(props) => this.state.loggedIn ? <Home /> : <Redirect to='/' />} />
              <Route exact path="/myclubs" render={(props) => this.state.loggedIn ? <MyClubs /> : <Redirect to='/' />} />
              <Route exact path="/search" render={(props) => this.state.loggedIn ? <Search /> : <Redirect to='/' />} />
              <Route exact path="/mypage" render={(props) => this.state.loggedIn ? <MyPage /> : <Redirect to='/' />} />
              <Route exact path="/" render={(props) => this.state.loggedIn ? <Redirect to='/home' /> : <LoginorSignUp />} />
              <Route exact path="/login" render={(props) => this.state.loggedIn ? <Redirect to='/home' /> : <Login handleLogin={this.handleLogin} />} />
              <Route exact path="/signup" render={(props) => this.state.loggedIn ? <Redirect to='/home' /> : <SignUp />} />
            </IonRouterOutlet>
            <IonTabBar slot="bottom">
            <IonTabButton tab="Home" href="/home">
                  <IonIcon icon={home} />
                  <IonLabel>Home</IonLabel>
                </IonTabButton>
              <IonTabButton tab="My Page" href="/mypage">
                  <IonIcon icon={personCircle} />
                  <IonLabel>My Page</IonLabel>
                </IonTabButton>
              <IonTabButton tab="BCM Page" href="/bcm">
                  <IonIcon icon={personCircle} />
                  <IonLabel>BCM Page</IonLabel>
                </IonTabButton>
              <IonTabButton tab="My Clubs" href="/myclubs">
                <IonIcon icon={people} />
                <IonLabel>My Clubs</IonLabel>
              </IonTabButton>
              <IonTabButton tab="Search Movies or Shows" href="/search">
                <IonIcon icon={search} />
                <IonLabel>Search Movies or Shows</IonLabel>
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        </IonReactRouter>
      </IonApp>
    );
  }
};

export default App;
