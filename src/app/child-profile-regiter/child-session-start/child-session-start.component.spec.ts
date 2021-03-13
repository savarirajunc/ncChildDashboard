import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildSessionStartComponent } from './child-session-start.component';

describe('ChildSessionStartComponent', () => {
  let component: ChildSessionStartComponent;
  let fixture: ComponentFixture<ChildSessionStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildSessionStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildSessionStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
