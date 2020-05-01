
//inserting a tab bar to navigate

import React from 'react';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonBadge } from '@ionic/react';
import { calendar, personCircle, map, informationCircle } from 'ionicons/icons';


export const TabsExample: React.FC = () => (
  <IonTabs>
    <IonTabBar slot="bottom">
      <IonTabButton tab="schedule">
        <IonIcon icon={calendar} />
        <IonLabel>Schedule</IonLabel>
        <IonBadge>6</IonBadge>
      </IonTabButton>

      <IonTabButton tab="speakers">
        <IonIcon icon={personCircle} />
        <IonLabel>Speakers</IonLabel>
      </IonTabButton>

      <IonTabButton tab="map">
        <IonIcon icon={map} />
        <IonLabel>Map</IonLabel>
      </IonTabButton>

      <IonTabButton tab="about">
        <IonIcon icon={informationCircle} />
        <IonLabel>About</IonLabel>
      </IonTabButton>
    </IonTabBar>
  </IonTabs>
);

// the following is a picker in ionic. 

import React from "react";
import { PickerColumn } from "@ionic/core";
import { IonPicker } from "@ionic/react";

/**
 * the component has three properties that are defined in this 
 * interface since we are using typescript
 */
interface _Props {
  isOpen : boolean
  onSave : Function
  onCancel : Function
}

const MyPicker: React.FC<_Props> = ({onSave, onCancel, isOpen}) => { 
  return <div></div>
}

const DayColumn = {
  name: "Day",
  options: [
    { text: "Monday", value: "Monday" },
    { text: "Tuesday", value: "Tuesday" },
    { text: "Wednesday", value: "Wednesday" },
    { text: "Thursday", value: "Thursday" },
    { text: "Friday", value: "Friday" }
  ]
} as PickerColumn;;

const SessionTimeColumn = {
  name: "SessionTime",
  options: [
    { text: "Morning 8a - 12p", value: "Morning" },
    { text: "Afteroon 1p - 5p", value: "Afteroon" }
  ]
} as PickerColumn;

return (
  <div>
    <IonPicker
      isOpen={isOpen}
      columns={[DayColumn, SessionTimeColumn]}
      buttons={[
        {
          text: "Cancel",
          role: "cancel",
          handler: value => {
            onCancel()
          }
        },
        {
          text: "Confirm",
          handler: value => {
            onSave(value)
          }
        }
      ]}
    ></IonPicker>
  </div>
);

import React, { useState } from "react";
import "./Home.css";
import MyPicker from "../src/components.js";

export interface ISessionTime {
  weekday: string;
  period: string;
}

const [pickerIsOpen, setPickerIsOpen] = useState(false);
const [sessionTime, setSessionTime] = useState<ISessionTime | undefined>(
    undefined
  );

  <IonItem>
  <IonButton onClick={() => { setPickerIsOpen(true); }} >
    Select Session
  </IonButton>
  <IonButton onClick={() => { setSessionTime(undefined); }}>
    Clear Session
  </IonButton>
</IonItem>

<IonItem onClick={() => { setPickerIsOpen(true); }} >
  {sessionTime ? (
    <IonLabel>
      {sessionTime?.weekday} - {sessionTime?.period}
    </IonLabel>
  ) : (
    <IonLabel className="placeHolder">Please Select Session</IonLabel>
  )}
</IonItem>

<MyPicker
  isOpen={pickerIsOpen}
  onCancel={() => {
    setPickerIsOpen(false);
  }}
  onSave={(_value: any) => {
    console.log(_value);
    let { Day, SessionTime } = _value;
    setSessionTime({ weekday: Day.value, period: SessionTime.value });
    setPickerIsOpen(false);
  }}
/>