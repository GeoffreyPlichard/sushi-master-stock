import { Component, Input, OnInit } from '@angular/core';

import { ModalController } from '@ionic/angular';
import { Supplier, Supply, SupplyWithID } from '../../services/data.service';


export interface ISupplyModalReturn {
  id?: String;
  payload: Supply;
}

@Component({
  selector: 'app-supply-modal',
  templateUrl: 'supply-modal.component.html',
})
export class SupplyModalComponent implements OnInit {
  @Input() supplyWithId?: SupplyWithID;
  @Input() supplierId: string;

  name: string;
  title: string;
  reference: string;
  upet: number;
  min_price: number;
  stock: number;


  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {
    if (this.supplyWithId!!) {
      this.title = 'Modifier un produit';
      this.name = this.supplyWithId.name;
      
    } else {
      this.title = 'Ajouter un produit';
    }
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    let payload: Supply = {
      name: this.name,
      reference: this.reference,
      upet: this.upet,
      min_price: this.min_price,
      stock: this.stock,
      supplierId: this.supplierId
    }

    const data: ISupplyModalReturn = {
      id: this.supplyWithId?.id,
      payload: payload
    }
    
    return this.modalCtrl.dismiss(data, 'confirm');
  }
}