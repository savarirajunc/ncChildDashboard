import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteParentListComponent } from './complete-parent-list.component';

describe('CompleteParentListComponent', () => {
  let component: CompleteParentListComponent;
  let fixture: ComponentFixture<CompleteParentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompleteParentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompleteParentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
