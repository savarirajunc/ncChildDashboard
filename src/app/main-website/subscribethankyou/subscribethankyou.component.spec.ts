import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribethankyouComponent } from './subscribethankyou.component';

describe('SubscribethankyouComponent', () => {
  let component: SubscribethankyouComponent;
  let fixture: ComponentFixture<SubscribethankyouComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscribethankyouComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscribethankyouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
