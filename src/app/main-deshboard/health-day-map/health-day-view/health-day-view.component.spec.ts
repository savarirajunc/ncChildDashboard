import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthDayViewComponent } from './health-day-view.component';

describe('HealthDayViewComponent', () => {
  let component: HealthDayViewComponent;
  let fixture: ComponentFixture<HealthDayViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthDayViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthDayViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
