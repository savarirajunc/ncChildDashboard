import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameDataViewComponent } from './game-data-view.component';

describe('GameDataViewComponent', () => {
  let component: GameDataViewComponent;
  let fixture: ComponentFixture<GameDataViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameDataViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameDataViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
