import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestExplorationComponent } from './interest-exploration.component';

describe('InterestExplorationComponent', () => {
  let component: InterestExplorationComponent;
  let fixture: ComponentFixture<InterestExplorationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterestExplorationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterestExplorationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
