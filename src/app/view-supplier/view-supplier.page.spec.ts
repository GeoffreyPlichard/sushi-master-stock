import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { ViewSupplierPageRoutingModule } from './view-supplier-routing.module';
import { ViewSupplierPage } from './view-supplier.page';

describe('ViewSupplierPage', () => {
  let component: ViewSupplierPage;
  let fixture: ComponentFixture<ViewSupplierPage>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ViewSupplierPage],
      imports: [IonicModule.forRoot(), ViewSupplierPageRoutingModule, RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewSupplierPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
