import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, withIonLifeCycle, IonButton } from '@ionic/react';
import Logout from '../components/Logout/Logout';
import HomeClubButton from '../components/HomeClubButton/HomeClubButton';
import API from '../utils/API';
import HomeCommentList from '../components/HomeCommentList/HomeCommentList';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {clubs: [], clubComments: [], clubView: false, clubID: null};

    this.pass = this.pass.bind(this);
  }

  ionViewWillEnter = () => {
    let currentComponent = this;
    console.log('ionViewWillEnter event fired');
    API.getMemberClubs(this.props.currentUserID)
    .then(function(response) {
      console.log(response.data);
      let clubList = [];
      response.data.forEach(data => {
        clubList.push(data);
      })
      currentComponent.setState({clubs: clubList});
    })
  }

  pass() {
    this.props.handleLogout();
  }

  loadClub = id => {
    let currentComponent = this;
    API.getClubComments(id)
    .then(function(response) {
      console.log(response.data);
      let commentList = [];
      for (let i = response.data.length - 1; i >= 0; i--) {
        commentList.push(response.data[i]);
      }     
      console.log(commentList);
      currentComponent.setState({clubComments: commentList, clubView: true, clubID: id});
    })
  }

  render() {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Viewing Party</IonTitle>
            <Logout pass={this.pass} />
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <section>
            <HomeClubButton clubs={this.state.clubs} loadClub={this.loadClub} />
          </section>
          <section>
          {this.state.clubView
          ? <HomeCommentList clubs={this.state.clubs} clubComments={this.state.clubComments} clubID={this.state.clubID} />
          : <div></div>
          }
          </section>
        </IonContent>
      </IonPage>
    );
  }
};

export default withIonLifeCycle(Home);