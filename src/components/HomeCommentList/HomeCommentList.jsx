import React from 'react';
import { IonCard, IonList, IonListHeader, IonLabel, IonItem, IonAvatar, IonButton  } from '@ionic/react';

function HomeCommentList(props) {
    let clubName;
    for (let i = 0; i < props.clubs.length; i++) {
        if (props.clubs[i].club_id === parseInt(props.clubID)) {
            clubName = props.clubs[i].club_name;
            console.log(clubName);
        }
    }
    let comments = props.clubComments;
    for (let i = 0; i < comments.length; i++) {
        for (let j = 0; j < props.members.length; j++) {
            if (comments[i].fk_member_id == props.members[j].id) {
                comments[i].poster_name = `${props.members[j].first_name} ${props.members[j].last_name}`;
            }
        }
    }
    let commentList = comments.map((comment) => {
        return(
            <IonItem id={comment.id}>
                <IonLabel>
                <p>{comment.comment}</p>
                <h6>By <a href="#" className={comment.fk_member_id}>{comment.poster_name}</a></h6>
                </IonLabel>
            </IonItem>
        )
    })

    return(
        <IonCard>
            <IonList>
            <IonListHeader>
                <IonLabel>
                <h1>Comments from {clubName}</h1>
                </IonLabel>
            </IonListHeader>

            {commentList}

            </IonList>
        </IonCard>
    );
};

export default HomeCommentList;