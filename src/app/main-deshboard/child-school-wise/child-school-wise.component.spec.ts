import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildSchoolWiseComponent } from './child-school-wise.component';

describe('ChildSchoolWiseComponent', () => {
  let component: ChildSchoolWiseComponent;
  let fixture: ComponentFixture<ChildSchoolWiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildSchoolWiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildSchoolWiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
