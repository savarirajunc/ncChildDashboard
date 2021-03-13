import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthcareProvidersComponent } from './healthcare-providers.component';

describe('HealthcareProvidersComponent', () => {
  let component: HealthcareProvidersComponent;
  let fixture: ComponentFixture<HealthcareProvidersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthcareProvidersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthcareProvidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
