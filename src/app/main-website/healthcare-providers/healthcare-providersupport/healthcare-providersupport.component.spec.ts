import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthcareProvidersupportComponent } from './healthcare-providersupport.component';

describe('HealthcareProvidersupportComponent', () => {
  let component: HealthcareProvidersupportComponent;
  let fixture: ComponentFixture<HealthcareProvidersupportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthcareProvidersupportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthcareProvidersupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
