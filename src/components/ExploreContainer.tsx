import './ExploreContainer.css';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCardTitle, IonCardHeader, IonCardSubtitle, IonInput, IonItem, IonButton} from '@ionic/react';
interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div id="container">
      <IonCardHeader>
        <IonCardTitle>Sistema de transaccion</IonCardTitle>
        <IonCardSubtitle>Cliente</IonCardSubtitle>
      </IonCardHeader>

      <IonItem>
        <IonInput label="Nombre"></IonInput>
      </IonItem> 

      <IonItem>
        <IonInput label="Direccion de envio"></IonInput>
      </IonItem>
      <IonButton>Envia</IonButton>

    </div>
  );
};

export default ExploreContainer;
