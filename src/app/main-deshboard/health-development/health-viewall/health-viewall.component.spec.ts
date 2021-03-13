import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthViewallComponent } from './health-viewall.component';

describe('HealthViewallComponent', () => {
  let component: HealthViewallComponent;
  let fixture: ComponentFixture<HealthViewallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthViewallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthViewallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
