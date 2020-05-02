import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, withIonLifeCycle, IonButton } from '@ionic/react';
import Logout from '../components/Logout/Logout';
import HomeClubButton from '../components/HomeClubButton/HomeClubButton';
import API from '../utils/API';
import HomeCommentList from '../components/HomeCommentList/HomeCommentList';
import HomeMovieList from '../components/HomeMovieList/HomeMovieList';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {clubs: [], clubComments: [], clubView: false, clubID: null, members: [], movies: [], moviesLoad: false};

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
    currentComponent.setState({moviesLoad: false});
    API.getClubMembers(id)
    .then(function(response) {
      console.log(response.data);
      let membersList = []
      response.data.forEach(member => {
        membersList.push(member);
      })
      currentComponent.setState({members: membersList});
    })
    .then(function() {
      let tempMovies = [];
      for (let i = 0; i < currentComponent.state.members.length; i++) {
        API.getMemberMovies(currentComponent.state.members[i].id)
        .then(function(response) {
            console.log(response.data);
            let movieExists = false;
            for (let i = 0; i < response.data.length; i++) {
                for (let j = 0; j < tempMovies.length; j++) {
                    if (response.data[i].title === tempMovies[j].title) {
                      if(response.data[i].movie_status === 'OPEN') {
                        tempMovies[j].watchlist.push(`${currentComponent.state.members[i].first_name} ${currentComponent.state.members[i].last_name}`);
                      } else if (response.data[i].movie_status === 'CLOSED') {
                        tempMovies[j].watched.push(`${currentComponent.state.members[i].first_name} ${currentComponent.state.members[i].last_name}`)
                      }
                      movieExists = true;
                    }
                }
                if (!movieExists) {
                  if(response.data[i].movie_status === 'OPEN') {
                    response.data[i].watchlist = [`${currentComponent.state.members[i].first_name} ${currentComponent.state.members[i].last_name}`]
                  } else if (response.data[i].movie_status === 'CLOSED') {
                    response.data[i].watched = [`${currentComponent.state.members[i].first_name} ${currentComponent.state.members[i].last_name}`]
                  }
                  tempMovies.push(response.data[i]);
                }
            }
        })
      }
      currentComponent.setState({movies: tempMovies, moviesLoad: true});
    })
    // .then(function() {
    //   currentComponent.setState({moviesLoad: true})
    // })

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
          {this.state.clubView
          ? <section>
              <HomeCommentList clubs={this.state.clubs} clubComments={this.state.clubComments} clubID={this.state.clubID} members={this.state.members} />
              <HomeMovieList clubs={this.state.clubs} clubID={this.state.clubID} members={this.state.members} movies={this.state.movies} />
            </section>
          : <div></div>
          }
          {/* {this.state.moviesLoad
          ? <section>
              <HomeMovieList clubs={this.state.clubs} clubID={this.state.clubID} members={this.state.members} movies={this.state.movies} />
          </section>
          : <div></div>
          } */}
        </IonContent>
      </IonPage>
    );
  }
};

export default withIonLifeCycle(Home);