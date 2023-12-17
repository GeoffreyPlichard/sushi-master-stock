import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController, Platform } from '@ionic/angular';
import { DataService, Supplier, Supply, SupplyWithID } from '../services/data.service';
import { map, Observable } from 'rxjs';
import { SupplyModalComponent } from '../modals/supply-modal/supply-modal.component';
import { addDoc, DocumentReference } from '@angular/fire/firestore';

@Component({
  selector: 'app-view-supplier',
  templateUrl: './view-supplier.page.html',
  styleUrls: ['./view-supplier.page.scss'],
})
export class ViewSupplierPage implements OnInit {
  public supplier$: Observable<Supplier>;
  public items$: Observable<SupplyWithID[]>;
  
  private data = inject(DataService);
  private activatedRoute = inject(ActivatedRoute);
  private platform = inject(Platform);
  private modalCtrl = inject(ModalController);
  private supplierId: string;

  constructor() {
    this.supplierId = this.activatedRoute.snapshot.paramMap.get('id') as string;

    this.items$ = this.data.getSupplies().pipe(
      map(items => {
        return items.filter(item => item.supplierId === this.supplierId)
      })
    )
  }

  ngOnInit() {
    this.supplier$ = this.data.getSupplierById(this.supplierId);
  }

  getBackButtonText() {
    const isIos = this.platform.is('ios')
    return isIos ? 'Inbox' : '';
  }

  getOrdersNb() {
    return this.data.getOrders().length;
  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: SupplyModalComponent,
      componentProps: {supplierId: this.supplierId}
    });

    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
        addDoc(this.data.getSupplyCollection(), <Supply> data.payload).then((documentReference: DocumentReference) => {
          console.log('document created', documentReference);
          // the documentReference provides access to the newly created document
        });
    }
  }
  
}
