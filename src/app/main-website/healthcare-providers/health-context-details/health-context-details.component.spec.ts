import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthContextDetailsComponent } from './health-context-details.component';

describe('HealthContextDetailsComponent', () => {
  let component: HealthContextDetailsComponent;
  let fixture: ComponentFixture<HealthContextDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthContextDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthContextDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
