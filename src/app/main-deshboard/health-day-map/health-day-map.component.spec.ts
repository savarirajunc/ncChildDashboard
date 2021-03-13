import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthDayMapComponent } from './health-day-map.component';

describe('HealthDayMapComponent', () => {
  let component: HealthDayMapComponent;
  let fixture: ComponentFixture<HealthDayMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthDayMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthDayMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
