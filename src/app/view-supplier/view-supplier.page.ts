import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonicModule, Platform } from '@ionic/angular';
import { DataService, Supplier } from '../services/data.service';

@Component({
  selector: 'app-view-supplier',
  templateUrl: './view-supplier.page.html',
  styleUrls: ['./view-supplier.page.scss'],
})
export class ViewSupplierPage implements OnInit {
  public supplier!: Supplier;
  private data = inject(DataService);
  private activatedRoute = inject(ActivatedRoute);
  private platform = inject(Platform);

  constructor() {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.supplier = this.data.getSupplierById(parseInt(id, 10));
  }

  getBackButtonText() {
    const isIos = this.platform.is('ios')
    return isIos ? 'Inbox' : '';
  }
}
