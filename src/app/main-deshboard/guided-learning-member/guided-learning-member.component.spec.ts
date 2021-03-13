import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidedLearningMemberComponent } from './guided-learning-member.component';

describe('GuidedLearningMemberComponent', () => {
  let component: GuidedLearningMemberComponent;
  let fixture: ComponentFixture<GuidedLearningMemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuidedLearningMemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuidedLearningMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
