import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewGameDetailsComponent } from './view-game-details.component';

describe('ViewGameDetailsComponent', () => {
  let component: ViewGameDetailsComponent;
  let fixture: ComponentFixture<ViewGameDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewGameDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewGameDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
