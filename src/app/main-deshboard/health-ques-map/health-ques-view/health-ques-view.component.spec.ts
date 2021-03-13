import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthQuesViewComponent } from './health-ques-view.component';

describe('HealthQuesViewComponent', () => {
  let component: HealthQuesViewComponent;
  let fixture: ComponentFixture<HealthQuesViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthQuesViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthQuesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
