import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidedLearningSchoolComponent } from './guided-learning-school.component';

describe('GuidedLearningSchoolComponent', () => {
  let component: GuidedLearningSchoolComponent;
  let fixture: ComponentFixture<GuidedLearningSchoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuidedLearningSchoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuidedLearningSchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
