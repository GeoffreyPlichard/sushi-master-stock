import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SupplierModalComponent } from './supplier-modal.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule, RouterModule],
  declarations: [SupplierModalComponent],
  exports: [SupplierModalComponent]
})
export class SupplierModalComponentModule {}
