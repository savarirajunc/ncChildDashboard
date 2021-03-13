import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthQuesAddComponent } from './health-ques-add.component';

describe('HealthQuesAddComponent', () => {
  let component: HealthQuesAddComponent;
  let fixture: ComponentFixture<HealthQuesAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthQuesAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthQuesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
