import { Component, inject } from '@angular/core';
import { Platform } from '@ionic/angular';
import { DataService, IOrder } from '../services/data.service';


@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage {
  private data = inject(DataService);
  private platform = inject(Platform);

  constructor() {}

  getBackButtonText() {
    const isIos = this.platform.is('ios')
    return isIos ? 'Inbox' : '';
  }

  getOrders(): IOrder[] {
    return this.data.getOrders();
  }

  getSupplierById(id: number) {
    return this.data.getSupplierById(id);
  }
  
}
