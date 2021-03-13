import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentGuidedViewComponent } from './parent-guided-view.component';

describe('ParentGuidedViewComponent', () => {
  let component: ParentGuidedViewComponent;
  let fixture: ComponentFixture<ParentGuidedViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentGuidedViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentGuidedViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
