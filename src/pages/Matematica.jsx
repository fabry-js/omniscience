import React, {Component} from 'react';
import { IonBackButton, IonButtons, IonHeader, IonPage, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/react';

  class Matematica extends Component {

    //scripts
    //...

      render(){
          return(
            <IonPage>
                <IonHeader>
                  <IonToolbar>
                    <IonButtons slot="start">
                      <IonBackButton defaultHref="/tab1" />
                    </IonButtons>
                    <IonTitle>Matematica</IonTitle>
                  </IonToolbar>
                </IonHeader>

            

            </IonPage>
          )
      }
  }


  export default Matematica;