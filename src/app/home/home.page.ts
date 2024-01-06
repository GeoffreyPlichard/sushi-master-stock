import { Component, inject } from '@angular/core';
import { RefresherCustomEvent } from '@ionic/angular';
import { DataService, Supplier, SupplierWithID, SupplyWithID } from '../services/data.service';
import { addDoc, DocumentReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ModalController } from '@ionic/angular';
import { SupplierModalComponent } from '../modals/supplier-modal/supplier-modal.component';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public items$: Observable<SupplierWithID[]>;
  public orders$: Observable<SupplyWithID[]>;

  private data = inject(DataService);
  public auth = inject(AuthService)

  constructor(private modalCtrl: ModalController) {
    this.items$ = this.data.getSuppliers();
    this.orders$ = this.data.getOrders();
  }

  refresh(ev: any) {
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete();
    }, 3000);
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

  logout() {
    console.log('logout')
    this.auth.logout();
  }
}
