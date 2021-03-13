import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildScheduledTimeComponent } from './child-scheduled-time.component';

describe('ChildScheduledTimeComponent', () => {
  let component: ChildScheduledTimeComponent;
  let fixture: ComponentFixture<ChildScheduledTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildScheduledTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildScheduledTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
