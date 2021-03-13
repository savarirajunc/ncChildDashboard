import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssingNewgameDetailsComponent } from './assing-newgame-details.component';

describe('AssingNewgameDetailsComponent', () => {
  let component: AssingNewgameDetailsComponent;
  let fixture: ComponentFixture<AssingNewgameDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssingNewgameDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssingNewgameDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
