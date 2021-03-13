import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthInstituteDetailsComponent } from './health-institute-details.component';

describe('HealthInstituteDetailsComponent', () => {
  let component: HealthInstituteDetailsComponent;
  let fixture: ComponentFixture<HealthInstituteDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthInstituteDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthInstituteDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
