import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidedlearningComponent } from './guidedlearning.component';

describe('GuidedlearningComponent', () => {
  let component: GuidedlearningComponent;
  let fixture: ComponentFixture<GuidedlearningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuidedlearningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuidedlearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
