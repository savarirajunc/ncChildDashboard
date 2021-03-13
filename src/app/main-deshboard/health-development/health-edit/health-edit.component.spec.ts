import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthEditComponent } from './health-edit.component';

describe('HealthEditComponent', () => {
  let component: HealthEditComponent;
  let fixture: ComponentFixture<HealthEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
