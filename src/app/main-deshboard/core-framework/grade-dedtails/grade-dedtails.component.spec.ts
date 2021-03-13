import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeDedtailsComponent } from './grade-dedtails.component';

describe('GradeDedtailsComponent', () => {
  let component: GradeDedtailsComponent;
  let fixture: ComponentFixture<GradeDedtailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradeDedtailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradeDedtailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
