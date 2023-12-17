import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { Platform } from '@ionic/angular';
import { DataService, Supply } from '../services/data.service';


@Component({
  selector: 'app-supply',
  templateUrl: './supply.component.html',
  styleUrls: ['./supply.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SupplyComponent {
  private platform = inject(Platform);
  private data = inject(DataService);
  @Input() supply?: Supply;
  // @Input() supplierId?: SupplierID;
  isIos() {
    return this.platform.is('ios')
  }

  decrease() {
    if (this.supply) {
        this.supply.stock--;
    }
  }

  addOrder(supply?: Supply) {
    // if (supply && (this.supplierId !== undefined)) {
    //     this.data.addOrder({
    //         ...supply,
    //         supplierId: this.supplierId
    //     })
    // }
  }
}
