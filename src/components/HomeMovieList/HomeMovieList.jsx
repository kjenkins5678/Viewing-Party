import React from 'react';
import { IonCard, IonList, IonListHeader, IonLabel, IonItem, IonAvatar, IonButton, IonImg, withIonLifeCycle  } from '@ionic/react';
import API from '../../utils/API';

let clubName;
let movies;
let movieList;

class HomeMovieList extends React.Component {
    constructor(props) {
        super(props);
    }

    ionViewWillEnter() {
        let currentComponent = this;
        movies = currentComponent.props.movies;
        console.log(movies);
        for (let i = 0; i < currentComponent.props.clubs.length; i++) {
            if (currentComponent.props.clubs[i].club_id === parseInt(currentComponent.props.clubID)) {
                clubName = currentComponent.props.clubs[i].club_name;
                console.log(clubName);
                break;
            }
        }
        movieList = movies.map((movie) => {
            let watchList;
            let watched;
    
            if(movie.watchlist !== undefined) {
                watchList = movie.watchlist.map((person) => {
                    return(
                        <p>{person}</p>
                    )
                })
            }
    
            if(movie.watched !== undefined) {
                watched = movie.watched.map((person) => {
                    return(
                        <p>{person}</p>
                    )
                })
            }
    
            return(
                <IonItem>
                    {/* <IonImg src={movie.poster_url} />
                    <h2>{movie.title}</h2>
                    <h3>{movie.synopsis}</h3> */}
                    <IonAvatar slot="start">
                    <img alt={movie.title} src={movie.poster_url} />
                    </IonAvatar>
                    <IonLabel>
                    <h2>{movie.title}</h2>
                    <h3>{movie.synopsis}</h3>
                    <h2>Friends Who Want to Watch This:</h2>
                    {watchList}
                    <h2>Friends Who Have Watched This:</h2>
                    {watched}
                    </IonLabel>
                </IonItem>
            )
        })
    }

    //   for (let i = 0; i < props.members.length; i++) {
    //     API.getMemberMovies(props.members[i].id)
    //     .then(function(response) {
    //         console.log(response.data);
    //         let movieExists = false;
    //         for (let i = 0; i < response.data.length; i++) {
    //             for (let j = 0; j < movies.length; j++) {
    //                 if (response.data[i].title === movies[j].title) {
    //                     movieExists = true;
    //                 }
    //             }
    //             if (!movieExists) {
    //                 movies.push(response.data[i]);
    //             }
    //         }
    //     })
    //   }

    
    render() {
        return(
            <IonCard>
                <IonList>
                <IonListHeader>
                    <IonLabel>
                    <h1>Movies from {clubName}</h1>
                    </IonLabel>
                </IonListHeader>
    
                {movieList}
    
                </IonList>
            </IonCard>
        );
    }
};

export default withIonLifeCycle(HomeMovieList);