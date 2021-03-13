import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildDeactiveComponent } from './child-deactive.component';

describe('ChildDeactiveComponent', () => {
  let component: ChildDeactiveComponent;
  let fixture: ComponentFixture<ChildDeactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildDeactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildDeactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
