import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationthankyouComponent } from './notificationthankyou.component';

describe('NotificationthankyouComponent', () => {
  let component: NotificationthankyouComponent;
  let fixture: ComponentFixture<NotificationthankyouComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationthankyouComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationthankyouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
