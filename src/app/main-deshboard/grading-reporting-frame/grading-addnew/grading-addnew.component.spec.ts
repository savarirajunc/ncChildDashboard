import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradingAddnewComponent } from './grading-addnew.component';

describe('GradingAddnewComponent', () => {
  let component: GradingAddnewComponent;
  let fixture: ComponentFixture<GradingAddnewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradingAddnewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradingAddnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
