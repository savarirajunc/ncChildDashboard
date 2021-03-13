import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentGuidedLearingComponent } from './parent-guided-learing.component';

describe('ParentGuidedLearingComponent', () => {
  let component: ParentGuidedLearingComponent;
  let fixture: ComponentFixture<ParentGuidedLearingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentGuidedLearingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentGuidedLearingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
