import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { ModalController, Platform } from '@ionic/angular';
import { DataService, Supply } from '../services/data.service';
import { SupplyModalComponent } from '../modals/supply-modal/supply-modal.component';
import { updateDoc } from '@angular/fire/firestore';


@Component({
  selector: 'app-supply',
  templateUrl: './supply.component.html',
  styleUrls: ['./supply.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SupplyComponent {
  @Input() supply?: Supply;
  @Input() supplierId?: string;

  private platform = inject(Platform);
  private data = inject(DataService);
  private modalCtrl = inject(ModalController)

  isIos() {
    return this.platform.is('ios')
  }

  decrease() {
    if (this.supply) {
        this.supply.stock--;
    }
  }

  delete() {

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

  addOrder(supply?: Supply) {
    // if (supply && (this.supplierId !== undefined)) {
    //     this.data.addOrder({
    //         ...supply,
    //         supplierId: this.supplierId
    //     })
    // }
  }
}
