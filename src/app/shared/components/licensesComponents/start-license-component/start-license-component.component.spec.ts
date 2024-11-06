import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartLicenseComponentComponent } from './start-license-component.component';

describe('StartLicenseComponentComponent', () => {
  let component: StartLicenseComponentComponent;
  let fixture: ComponentFixture<StartLicenseComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StartLicenseComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartLicenseComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
