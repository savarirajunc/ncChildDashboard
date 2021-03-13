import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthDayAddComponent } from './health-day-add.component';

describe('HealthDayAddComponent', () => {
  let component: HealthDayAddComponent;
  let fixture: ComponentFixture<HealthDayAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthDayAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthDayAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
