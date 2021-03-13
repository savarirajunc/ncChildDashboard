import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthcareimageComponent } from './healthcareimage.component';

describe('HealthcareimageComponent', () => {
  let component: HealthcareimageComponent;
  let fixture: ComponentFixture<HealthcareimageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthcareimageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthcareimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
