import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmoreQuestionComponent } from './addmore-question.component';

describe('AddmoreQuestionComponent', () => {
  let component: AddmoreQuestionComponent;
  let fixture: ComponentFixture<AddmoreQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddmoreQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmoreQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
