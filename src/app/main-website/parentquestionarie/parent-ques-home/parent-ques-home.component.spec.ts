import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentQuesHomeComponent } from './parent-ques-home.component';

describe('ParentQuesHomeComponent', () => {
  let component: ParentQuesHomeComponent;
  let fixture: ComponentFixture<ParentQuesHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentQuesHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentQuesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
