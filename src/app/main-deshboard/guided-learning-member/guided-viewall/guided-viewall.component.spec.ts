import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidedViewallComponent } from './guided-viewall.component';

describe('GuidedViewallComponent', () => {
  let component: GuidedViewallComponent;
  let fixture: ComponentFixture<GuidedViewallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuidedViewallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuidedViewallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
