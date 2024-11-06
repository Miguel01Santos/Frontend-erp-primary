import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessLicenseComponentComponent } from './business-license-component.component';

describe('BusinessLicenseComponentComponent', () => {
  let component: BusinessLicenseComponentComponent;
  let fixture: ComponentFixture<BusinessLicenseComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusinessLicenseComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessLicenseComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
