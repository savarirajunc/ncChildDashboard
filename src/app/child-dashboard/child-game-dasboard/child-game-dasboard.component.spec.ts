import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildGameDasboardComponent } from './child-game-dasboard.component';

describe('ChildGameDasboardComponent', () => {
  let component: ChildGameDasboardComponent;
  let fixture: ComponentFixture<ChildGameDasboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildGameDasboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildGameDasboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
