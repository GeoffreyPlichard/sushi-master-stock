import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewSupplierPage } from './view-supplier.page';

const routes: Routes = [
  {
    path: '',
    component: ViewSupplierPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewSupplierPageRoutingModule {}
