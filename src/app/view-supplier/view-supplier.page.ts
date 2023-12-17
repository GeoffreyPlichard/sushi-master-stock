import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Platform } from '@ionic/angular';
import { DataService, Supplier, Supply } from '../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-view-supplier',
  templateUrl: './view-supplier.page.html',
  styleUrls: ['./view-supplier.page.scss'],
})
export class ViewSupplierPage implements OnInit {
  public supplier$: Observable<Supplier>;
  private data = inject(DataService);
  private activatedRoute = inject(ActivatedRoute);
  private platform = inject(Platform);

  constructor() {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.supplier$ = this.data.getSupplierById(id);
  }

  getBackButtonText() {
    const isIos = this.platform.is('ios')
    return isIos ? 'Inbox' : '';
  }

  // getSupplies(): Supply[] {
  //   return this.data.getSuppliesBySupplier(this.supplier.id);
  // }

  getOrdersNb() {
    return this.data.getOrders().length;
  }
  
}
