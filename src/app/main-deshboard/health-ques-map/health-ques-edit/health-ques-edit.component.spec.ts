import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthQuesEditComponent } from './health-ques-edit.component';

describe('HealthQuesEditComponent', () => {
  let component: HealthQuesEditComponent;
  let fixture: ComponentFixture<HealthQuesEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthQuesEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthQuesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
