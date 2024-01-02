import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { ModalController, ModalOptions, Platform } from '@ionic/angular';
import { DataService, SupplierWithID } from '../services/data.service';
import { deleteDoc, updateDoc } from '@angular/fire/firestore';
import { SupplierModalComponent } from '../modals/supplier-modal/supplier-modal.component';


@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SupplierComponent {
  @Input() supplier?: SupplierWithID;

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
  
  delete() {
    if (this.supplier) {
      const ref = this.data.getSupplierDocument(this.supplier.id);
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
      component: SupplierModalComponent,
      componentProps: {
        supplierWithId: this.supplier
      }
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      updateDoc(this.data.getSupplierDocument(data.id), data.payload);
    }
  }
}
