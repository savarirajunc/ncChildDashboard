import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentQusPreschoolComponent } from './parent-qus-preschool.component';

describe('ParentQusPreschoolComponent', () => {
  let component: ParentQusPreschoolComponent;
  let fixture: ComponentFixture<ParentQusPreschoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentQusPreschoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentQusPreschoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
