import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentQuestionarieComponent } from './parent-questionarie.component';

describe('ParentQuestionarieComponent', () => {
  let component: ParentQuestionarieComponent;
  let fixture: ComponentFixture<ParentQuestionarieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentQuestionarieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentQuestionarieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
