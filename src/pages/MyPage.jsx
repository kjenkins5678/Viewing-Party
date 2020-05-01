import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, withIonLifeCycle } from '@ionic/react';
import ToWatchList from '../components/ToWatchList';
import WatchedList from '../components/WatchedList';
import Logout from '../components/Logout/Logout';
import './MyPage.css';
import API from '../utils/API';

class MyPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {toWatch: [], watched: []};

    this.pass = this.pass.bind(this);
  }

  ionViewWillEnter() {
    if (this.props.loggedIn) {
      let currentComponent = this;
      console.log('ionViewWillEnter event fired');
      API.getMemberMovies(this.props.currentUserID)
      .then(function(response) {
        console.log(response.data);
        let toWatchList = [];
        let watchedList = [];
        for (let i = 0; i < response.data.length; i++) {
          if (response.data[i].movie_status === 'OPEN') {
            toWatchList.push(response.data[i]);
          } else if (response.data[i].movie_status === 'CLOSED') {
            watchedList.push(response.data[i]);
          }
      }
      currentComponent.setState({toWatch: toWatchList, watched: watchedList});
      })
    }
  }

  pass() {
    this.props.handleLogout();
  }

  render() {
    return (
      <IonPage id='my-page'>
        <IonHeader>
          <IonToolbar>
            <IonTitle>My Page</IonTitle>
            <Logout pass={this.pass} />
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonGrid>
            <IonRow>
              <IonCol>
                <ToWatchList toWatch={this.state.toWatch}></ToWatchList>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <WatchedList watched={this.state.watched}></WatchedList>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonPage>
    );
  }
};

export default withIonLifeCycle(MyPage);
