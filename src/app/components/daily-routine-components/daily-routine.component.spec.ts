import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyRoutineComponent } from './daily-routine.component';

describe('DailyRoutineComponent', () => {
  let component: DailyRoutineComponent;
  let fixture: ComponentFixture<DailyRoutineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyRoutineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyRoutineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
