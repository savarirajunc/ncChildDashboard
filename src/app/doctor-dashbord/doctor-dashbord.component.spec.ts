import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorDashbordComponent } from './doctor-dashbord.component';

describe('DoctorDashbordComponent', () => {
  let component: DoctorDashbordComponent;
  let fixture: ComponentFixture<DoctorDashbordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorDashbordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorDashbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
