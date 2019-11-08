import React, {Component} from 'react';
import { IonBackButton, IonButtons, IonHeader, IonPage, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/react';

  class Fisica extends Component {

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
                    <IonTitle>Fisica</IonTitle>
                  </IonToolbar>
                </IonHeader>

            

            </IonPage>
          )
      }
  }


  export default Fisica;