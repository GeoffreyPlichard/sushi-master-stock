import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { ModalController, Platform } from '@ionic/angular';
import { DataService, Order, Supply, SupplyWithID } from '../services/data.service';
import { SupplyModalComponent } from '../modals/supply-modal/supply-modal.component';
import { addDoc, deleteDoc, DocumentReference, updateDoc } from '@angular/fire/firestore';


@Component({
  selector: 'app-supply',
  templateUrl: './supply.component.html',
  styleUrls: ['./supply.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SupplyComponent {
  @Input() supply: SupplyWithID;
  @Input() supplierId?: string;

  private platform = inject(Platform);
  private data = inject(DataService);
  private modalCtrl = inject(ModalController)

  public alertButtons = [
    {
      text: 'Annuler',
      role: 'cancel',
    },
    {
      text: 'OK',
      role: 'confirm',
      handler: () => {
        this.delete();
      },
    },
  ];

  isIos() {
    return this.platform.is('ios')
  }

  decrease() {
    if (this.supply) {
        this.supply.stock--;
    }
  }

  delete() {
    if (this.supply) {
      const ref = this.data.getSupplyDocument(this.supply.id);
      deleteDoc(ref);
    }
  }

  setResult(ev: any) {
    console.log(`Dismissed with role: ${ev.detail.role}`);
  }

  edit() {
    this.openModal();
  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: SupplyModalComponent,
      componentProps: {
        supplyWithId: this.supply,
        supplierId: this.supplierId
      }
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      updateDoc(this.data.getSupplyDocument(data.id), data.payload);
    }
  }

  addOrder(supply: SupplyWithID) {
    const order: Order = {
      ...supply,
      isShipping: false,
      supplyId: supply.id
    };
    
    addDoc(this.data.getOrderCollection(), <Order> order).then((documentReference: DocumentReference) => {
      console.log('document created', documentReference);
      // the documentReference provides access to the newly created document
    });
  }
}
