import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildFriendInfoComponent } from './child-friend-info.component';

describe('ChildFriendInfoComponent', () => {
  let component: ChildFriendInfoComponent;
  let fixture: ComponentFixture<ChildFriendInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildFriendInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildFriendInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
