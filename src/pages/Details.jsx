import React from 'react';
import { IonBackButton, IonButtons, IonHeader, IonPage, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/react';

function Details() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/tab2" />
          </IonButtons>
          <IonTitle>Detail</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
        
            <IonCardHeader>
              <IonCardTitle>Questa è la tua cronologia</IonCardTitle>
            </IonCardHeader>

            <IonCardContent>
              <p>Qui non c'è niente... :( </p>
            </IonCardContent>
          
          </IonCard>

      </IonContent>
    
    </IonPage>
  );
};

export default Details;
