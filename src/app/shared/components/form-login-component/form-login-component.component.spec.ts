import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLoginComponentComponent } from './form-login-component.component';

describe('FormLoginComponentComponent', () => {
  let component: FormLoginComponentComponent;
  let fixture: ComponentFixture<FormLoginComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormLoginComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormLoginComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
