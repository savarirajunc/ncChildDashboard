import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralLayoutsComponent } from './general-layouts.component';

describe('GeneralLayoutsComponent', () => {
  let component: GeneralLayoutsComponent;
  let fixture: ComponentFixture<GeneralLayoutsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralLayoutsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralLayoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
