import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentGuidedAddComponent } from './parent-guided-add.component';

describe('ParentGuidedAddComponent', () => {
  let component: ParentGuidedAddComponent;
  let fixture: ComponentFixture<ParentGuidedAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentGuidedAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentGuidedAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
