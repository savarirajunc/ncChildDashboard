import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradingViewallComponent } from './grading-viewall.component';

describe('GradingViewallComponent', () => {
  let component: GradingViewallComponent;
  let fixture: ComponentFixture<GradingViewallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradingViewallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradingViewallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
