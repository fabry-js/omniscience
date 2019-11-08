import React, {Component} from 'react';
import { IonBackButton, IonButtons, IonHeader, IonPage, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/react';

  class Latino extends Component {

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
                    <IonTitle>Latino</IonTitle>
                  </IonToolbar>
                </IonHeader>

            

            </IonPage>
          )
      }
  }


  export default Latino;