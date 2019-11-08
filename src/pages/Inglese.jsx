import React, {Component} from 'react';
import { IonBackButton, IonButtons, IonHeader, IonPage, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonInput, IonButton } from '@ionic/react';

  class Inglese extends Component {
      constructor(props){
        super(props)

        this.traduzione = this.traduzione.bind(this);
      }
      traduzione(e){
        e.preventDefault();

      }

      render(){
          return(
            <IonPage>
                <IonHeader>
                  <IonToolbar>
                    <IonButtons slot="start">
                      <IonBackButton defaultHref="/tab1" />
                    </IonButtons>
                    <IonTitle>Inglese</IonTitle>
                  </IonToolbar>
                </IonHeader>
            <IonInput placeholder="Inserisci la frase da tradurre...">
              
            </IonInput>
            <IonButton value="submit" onClick={this.traduzione}>
                Traduci!
            </IonButton>

            </IonPage>
          )
      }
  }


  export default Inglese;