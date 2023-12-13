import { Component, inject } from '@angular/core';
import { RefresherCustomEvent } from '@ionic/angular';
import { SupplierComponent } from '../supplier/supplier.component';

import { DataService, Supplier } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private data = inject(DataService);
  constructor() {}

  refresh(ev: any) {
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete();
    }, 3000);
  }

  getSuppliers(): Supplier[] {
    return this.data.getSuppliers();
  }

  getOrdersNb() {
    return this.data.getOrders().length;
  }
}
