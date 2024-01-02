import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OrderPage } from './order.page';

import { IonicModule } from '@ionic/angular';

import { OrderPageRoutingModule } from './order-routing.module';
import { SupplierNamePipe } from '../pipes/supplier-name.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderPageRoutingModule,
  ],
  declarations: [OrderPage, SupplierNamePipe]
})
export class OrderPageModule {}
