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
  IonInput
} from '@ionic/react';
import React from 'react';
import './Tab1.css';

 function Tab1() {
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
            <IonCardTitle>Scrivi qui il problema della materia: undefined</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            <IonInput placeholder="Scrivi qui...">
              
            </IonInput>
          </IonCardContent>
        
        </IonCard>

      </IonContent>
    </IonPage>
  );
};

export default Tab1;
