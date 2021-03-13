import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentGuidedEditComponent } from './parent-guided-edit.component';

describe('ParentGuidedEditComponent', () => {
  let component: ParentGuidedEditComponent;
  let fixture: ComponentFixture<ParentGuidedEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentGuidedEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentGuidedEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
