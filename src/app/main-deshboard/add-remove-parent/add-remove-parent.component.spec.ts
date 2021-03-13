import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRemoveParentComponent } from './add-remove-parent.component';

describe('AddRemoveParentComponent', () => {
  let component: AddRemoveParentComponent;
  let fixture: ComponentFixture<AddRemoveParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRemoveParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRemoveParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
