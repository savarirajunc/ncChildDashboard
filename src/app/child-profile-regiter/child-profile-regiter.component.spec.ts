import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildProfileRegiterComponent } from './child-profile-regiter.component';

describe('ChildProfileRegiterComponent', () => {
  let component: ChildProfileRegiterComponent;
  let fixture: ComponentFixture<ChildProfileRegiterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildProfileRegiterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildProfileRegiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
