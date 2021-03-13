import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthcarVideoComponent } from './healthcar-video.component';

describe('HealthcarVideoComponent', () => {
  let component: HealthcarVideoComponent;
  let fixture: ComponentFixture<HealthcarVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthcarVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthcarVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
