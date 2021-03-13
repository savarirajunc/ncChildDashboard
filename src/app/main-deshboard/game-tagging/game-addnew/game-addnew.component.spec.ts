import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameAddnewComponent } from './game-addnew.component';

describe('GameAddnewComponent', () => {
  let component: GameAddnewComponent;
  let fixture: ComponentFixture<GameAddnewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameAddnewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameAddnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
