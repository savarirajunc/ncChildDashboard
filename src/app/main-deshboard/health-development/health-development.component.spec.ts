import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthDevelopmentComponent } from './health-development.component';

describe('HealthDevelopmentComponent', () => {
  let component: HealthDevelopmentComponent;
  let fixture: ComponentFixture<HealthDevelopmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthDevelopmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
