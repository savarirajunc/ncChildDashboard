import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentLayoutsComponent } from './parent-layouts.component';

describe('ParentLayoutsComponent', () => {
  let component: ParentLayoutsComponent;
  let fixture: ComponentFixture<ParentLayoutsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentLayoutsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentLayoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
