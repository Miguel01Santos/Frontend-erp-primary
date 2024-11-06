import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiumLicenseComponentComponent } from './premium-license-component.component';

describe('PremiumLicenseComponentComponent', () => {
  let component: PremiumLicenseComponentComponent;
  let fixture: ComponentFixture<PremiumLicenseComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PremiumLicenseComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PremiumLicenseComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
