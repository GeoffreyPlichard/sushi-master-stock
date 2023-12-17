import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { SupplierComponentModule } from '../supplier/supplier.module';
import { SupplierModalComponentModule } from '../modals/supplier-modal.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SupplierComponentModule,
    HomePageRoutingModule,
    SupplierModalComponentModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
