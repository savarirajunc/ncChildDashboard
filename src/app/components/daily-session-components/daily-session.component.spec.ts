import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailySessionComponent } from './daily-session.component';

describe('DailySessionComponent', () => {
  let component: DailySessionComponent;
  let fixture: ComponentFixture<DailySessionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailySessionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailySessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
