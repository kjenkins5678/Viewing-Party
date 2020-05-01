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
    let commentList = comments.map((comment) => {
        return(
            <IonItem id={comment.id}>
                <IonLabel>
                <p>{comment.comment}</p>
                <h6>By <a href="#" className={comment.fk_member_id}>User</a></h6>
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