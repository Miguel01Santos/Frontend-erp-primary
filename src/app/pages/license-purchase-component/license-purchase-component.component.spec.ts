import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicensePurchaseComponentComponent } from './license-purchase-component.component';

describe('LicensePurchaseComponentComponent', () => {
  let component: LicensePurchaseComponentComponent;
  let fixture: ComponentFixture<LicensePurchaseComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LicensePurchaseComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicensePurchaseComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
