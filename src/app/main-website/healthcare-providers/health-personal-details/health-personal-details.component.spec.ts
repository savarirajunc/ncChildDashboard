import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthPersonalDetailsComponent } from './health-personal-details.component';

describe('HealthPersonalDetailsComponent', () => {
  let component: HealthPersonalDetailsComponent;
  let fixture: ComponentFixture<HealthPersonalDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthPersonalDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthPersonalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
