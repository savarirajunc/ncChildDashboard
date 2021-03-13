import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthDayEditComponent } from './health-day-edit.component';

describe('HealthDayEditComponent', () => {
  let component: HealthDayEditComponent;
  let fixture: ComponentFixture<HealthDayEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthDayEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthDayEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
