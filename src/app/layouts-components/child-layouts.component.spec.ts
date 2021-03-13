import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildLayoutsComponent } from './child-layouts.component';

describe('ChildLayoutsComponent', () => {
  let component: ChildLayoutsComponent;
  let fixture: ComponentFixture<ChildLayoutsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildLayoutsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildLayoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
