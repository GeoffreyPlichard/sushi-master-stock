import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ViewSupplierPage } from './view-supplier.page';

import { IonicModule } from '@ionic/angular';

import { ViewSupplierPageRoutingModule } from './view-supplier-routing.module';
import { SupplyComponentModule } from '../supply/supply.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewSupplierPageRoutingModule,
    SupplyComponentModule
  ],
  declarations: [ViewSupplierPage]
})
export class ViewSupplierPageModule {}
