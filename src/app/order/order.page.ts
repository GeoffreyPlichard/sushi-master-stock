import { Component, inject } from '@angular/core';
import { Platform } from '@ionic/angular';
import { DataService, SupplierWithID, SupplyWithID } from '../services/data.service';
import { deleteDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage {
  public groupedOrders: {
    [key: string]: SupplyWithID[]
  };
  public suppliers: SupplierWithID[];
  
  private data = inject(DataService);
  private platform = inject(Platform);

  constructor() {
    this.data.getSuppliers().subscribe(suppliers => this.suppliers = suppliers);
  }

  ngOnInit() {
    this.data.getOrders().subscribe((orders) => {
      this.groupedOrders = orders.reduce((group: any, order: SupplyWithID) => {
        const { supplierId } = order;
        group[supplierId] = group[supplierId] ?? [];
        group[supplierId].push(order);
        return group;
      }, {});
    });
  }

  getBackButtonText() {
    const isIos = this.platform.is('ios')
    return isIos ? 'Inbox' : '';
  }

  remove(order: SupplyWithID) {
    const ref = this.data.getOrderDocument(order.id);
    deleteDoc(ref);
  }
}
