import { Component, inject } from '@angular/core';
import { Platform } from '@ionic/angular';
import { DataService, Order, SupplierWithID, Supply, SupplyWithID } from '../services/data.service';
import { deleteDoc, updateDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage {
  public groupedOrders: {
    [key: string]: Order[]
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

  remove(order: Order) {
    const ref = this.data.getOrderDocument(order.id);
    deleteDoc(ref);
  }

  send(order: Order) {
    const payload = {
      ...order,
      isShipping: true
    };

    if (order) {
      updateDoc(this.data.getOrderDocument(order.id), payload);
    }
  }

  addStock(order: Order) {
    const updatedSupply = {
      reference: order.reference,
      name: order.name,
      upet: order.upet,
      min_price: order.min_price,
      stock: order.stock + 1,
      supplierId: order.supplierId
    }

    updateDoc(this.data.getSupplyDocument(order.supplyId), updatedSupply).then(() => {
      this.remove(order);
    });
  }
}
