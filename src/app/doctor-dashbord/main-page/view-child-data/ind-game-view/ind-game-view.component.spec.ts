import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndGameViewComponent } from './ind-game-view.component';

describe('IndGameViewComponent', () => {
  let component: IndGameViewComponent;
  let fixture: ComponentFixture<IndGameViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndGameViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndGameViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
