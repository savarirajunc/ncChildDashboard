import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentQuestionKidComponent } from './parent-question-kid.component';

describe('ParentQuestionKidComponent', () => {
  let component: ParentQuestionKidComponent;
  let fixture: ComponentFixture<ParentQuestionKidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentQuestionKidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentQuestionKidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
