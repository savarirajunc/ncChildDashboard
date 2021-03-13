import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameTaggingComponent } from './game-tagging.component';

describe('GameTaggingComponent', () => {
  let component: GameTaggingComponent;
  let fixture: ComponentFixture<GameTaggingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameTaggingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameTaggingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
