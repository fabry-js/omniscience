import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonLabel,
  IonList,
  IonItem
} from '@ionic/react';
import React, { Component } from 'react';
import './Tab1.css';

class Tab1 extends Component {
  constructor(props){
      super(props);
    }

  render(){
    return (
      
      <IonPage>

      <IonHeader>
        <IonToolbar>
          <IonTitle>Problemi</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Seleziona una materia: </IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonList>
              <IonItem routerLink="/tab1/matematica">
                <IonLabel>
                  <h2>Matematica</h2>
                </IonLabel>
              </IonItem>
              
              <IonItem routerLink="/tab1/fisica">
                <IonLabel>
                  <h2>Fisica</h2>
                </IonLabel>
              </IonItem>
              
              <IonItem routerLink="/tab1/inglese">
                <IonLabel>
                  <h2>Inglese</h2>
                </IonLabel>
              </IonItem>
              
              <IonItem routerLink="/tab1/latino">
                <IonLabel>
                  <h2>Latino</h2>
                </IonLabel>
              </IonItem>
            </IonList>
          </IonCardContent>
        </IonCard>

        

      </IonContent>
    </IonPage>
    );
  }
}
;

export default Tab1;
