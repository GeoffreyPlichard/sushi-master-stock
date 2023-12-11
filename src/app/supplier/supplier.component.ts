import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Supplier } from '../services/data.service';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SupplierComponent {
  private platform = inject(Platform);
  @Input() supplier?: Supplier;
  isIos() {
    return this.platform.is('ios')
  }
}
