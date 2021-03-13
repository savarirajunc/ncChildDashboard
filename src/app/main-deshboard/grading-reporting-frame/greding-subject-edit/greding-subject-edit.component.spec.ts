import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GredingSubjectEditComponent } from './greding-subject-edit.component';

describe('GredingSubjectEditComponent', () => {
  let component: GredingSubjectEditComponent;
  let fixture: ComponentFixture<GredingSubjectEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GredingSubjectEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GredingSubjectEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
