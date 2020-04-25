import React from 'react';
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
import MyClubs from './pages/MyClubs';
import Search from './pages/Search';
import MyPage from './pages/MyPage';
import Home from './pages/Home';

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

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/home" component={Home} exact={true} />
          <Route path="/myclubs" component={MyClubs} exact={true} />
          <Route path="/search" component={Search} exact={true} />
          <Route path="/mypage" component={MyPage} />
          <Route path="/" render={() => <Redirect to="/home" />} exact={true} />
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

export default App;
