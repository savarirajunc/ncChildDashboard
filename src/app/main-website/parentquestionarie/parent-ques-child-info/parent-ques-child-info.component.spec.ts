import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentQuesChildInfoComponent } from './parent-ques-child-info.component';

describe('ParentQuesChildInfoComponent', () => {
  let component: ParentQuesChildInfoComponent;
  let fixture: ComponentFixture<ParentQuesChildInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentQuesChildInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentQuesChildInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
