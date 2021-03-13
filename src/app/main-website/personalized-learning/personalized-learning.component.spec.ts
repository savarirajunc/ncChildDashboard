import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalizedLearningComponent } from './personalized-learning.component';

describe('PersonalizedLearningComponent', () => {
  let component: PersonalizedLearningComponent;
  let fixture: ComponentFixture<PersonalizedLearningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalizedLearningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalizedLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
