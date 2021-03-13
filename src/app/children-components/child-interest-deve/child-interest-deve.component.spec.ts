import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildInterestDeveComponent } from './child-interest-deve.component';

describe('ChildInterestDeveComponent', () => {
  let component: ChildInterestDeveComponent;
  let fixture: ComponentFixture<ChildInterestDeveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildInterestDeveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildInterestDeveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
