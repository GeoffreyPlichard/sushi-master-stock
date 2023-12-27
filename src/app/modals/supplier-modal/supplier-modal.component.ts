import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Supplier, SupplierWithID } from '../../services/data.service';


export interface ISupplierModalReturn {
  id?: String;
  payload: Supplier;
}

@Component({
  selector: 'app-supplier-modal',
  templateUrl: 'supplier-modal.component.html',
})
export class SupplierModalComponent implements OnInit {
  @Input() supplierWithId?: SupplierWithID;

  name: string;
  title: string;
  type: string;
  tel: string;
  email: string;

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {
    if (this.supplierWithId!!) {
      this.title = 'Modifier un fournisseur';
      this.name = this.supplierWithId.name;
      this.type = this.supplierWithId.type;
      this.tel = this.supplierWithId.tel;
      this.email = this.supplierWithId.email;
    } else {
      this.title = 'Ajouter un fournisseur';
    }
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    let payload: Supplier = {
      name: this.name,
      type: this.type,
      tel: this.tel,
      email: this.email
    }

    const data: ISupplierModalReturn = {
      id: this.supplierWithId?.id,
      payload: payload
    }
    
    return this.modalCtrl.dismiss(data, 'confirm');
  }
}