import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProLicenseComponentComponent } from './pro-license-component.component';

describe('ProLicenseComponentComponent', () => {
  let component: ProLicenseComponentComponent;
  let fixture: ComponentFixture<ProLicenseComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProLicenseComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProLicenseComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
