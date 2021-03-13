import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradingReportingFrameComponent } from './grading-reporting-frame.component';

describe('GradingReportingFrameComponent', () => {
  let component: GradingReportingFrameComponent;
  let fixture: ComponentFixture<GradingReportingFrameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradingReportingFrameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradingReportingFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
