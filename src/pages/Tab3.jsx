import React from 'react';
import { IonHeader, IonToolbar, IonPage, IonTitle, IonContent, IonCard, IonCardContent } from '@ionic/react';

function Tab3() {  
  /*const materie = {
    "subj":
    [
      "Italiano",
      "Matematica",
      "Latino",
      "Fisica"
    ]
  }*/
  /* 
  let x = materie.subj[0];
  for (let i = 0; i < materie.subj.length; i++) {
      x = materie.subj[i];
  } */

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Materie</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonCard>
        <IonCardContent>
        <ion-item>
          <ion-label>Materie</ion-label>
          <ion-select value="subjects" interface="action-sheet">
            <ion-select-option>Matematica</ion-select-option>
            <ion-select-option>Fisica</ion-select-option>
            <ion-select-option>Latino</ion-select-option>
            <ion-select-option>Inglese</ion-select-option>
          </ion-select>
        </ion-item>
        </IonCardContent>
      </IonCard>

      <IonContent />
    </IonPage>
  );
  
};

export default Tab3;
