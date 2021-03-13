import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthQuesMapComponent } from './health-ques-map.component';

describe('HealthQuesMapComponent', () => {
  let component: HealthQuesMapComponent;
  let fixture: ComponentFixture<HealthQuesMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthQuesMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthQuesMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
