import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildEducationPerformanceComponent } from './child-education-performance.component';

describe('ChildEducationPerformanceComponent', () => {
  let component: ChildEducationPerformanceComponent;
  let fixture: ComponentFixture<ChildEducationPerformanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildEducationPerformanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildEducationPerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
