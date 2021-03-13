import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentgamesReportViewComponent } from './parentgames-report-view.component';

describe('ParentgamesReportViewComponent', () => {
  let component: ParentgamesReportViewComponent;
  let fixture: ComponentFixture<ParentgamesReportViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentgamesReportViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentgamesReportViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
