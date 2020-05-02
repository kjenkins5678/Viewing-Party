import React from 'react';
import { IonCard, IonList, IonListHeader, IonLabel, IonItem, IonAvatar, IonButton  } from '@ionic/react';

function HomeClubButton(props) {
    let clubs = props.clubs;
    let clubList = clubs.map((club) => {
        return(
            <IonButton id={club.club_id} onClick={renderClubs}>{club.club_name}</IonButton>
        )
    })

    function renderClubs(event) {
        console.log(event.target.id);
        props.loadClub(event.target.id);
    }

    return(
        <div>
            {clubList}
        </div>
    );
};

export default HomeClubButton;