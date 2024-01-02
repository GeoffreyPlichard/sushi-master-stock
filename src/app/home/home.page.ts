import { Component, inject } from '@angular/core';
import { RefresherCustomEvent } from '@ionic/angular';
import { DataService, Supplier, SupplierWithID } from '../services/data.service';
import { Firestore, addDoc, DocumentReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ModalController } from '@ionic/angular';
import { SupplierModalComponent } from '../modals/supplier-modal/supplier-modal.component';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private data = inject(DataService);
  firestore: Firestore = inject(Firestore)
  items$: Observable<SupplierWithID[]>;

  constructor(private modalCtrl: ModalController) {
    this.items$ = this.data.getSuppliers();
  }

  refresh(ev: any) {
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete();
    }, 3000);
  }

  getOrdersNb() {
    //return this.data.getOrders().length;
  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: SupplierModalComponent,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
        addDoc(this.data.getSupplierCollection(), <Supplier> data.payload).then((documentReference: DocumentReference) => {
          console.log('document created', documentReference);
          // the documentReference provides access to the newly created document
        });
    }
  }
}
