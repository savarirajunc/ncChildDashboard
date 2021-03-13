import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidedEditComponent } from './guided-edit.component';

describe('GuidedEditComponent', () => {
  let component: GuidedEditComponent;
  let fixture: ComponentFixture<GuidedEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuidedEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuidedEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
