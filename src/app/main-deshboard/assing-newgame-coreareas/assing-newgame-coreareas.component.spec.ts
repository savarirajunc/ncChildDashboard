import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssingNewgameCoreareasComponent } from './assing-newgame-coreareas.component';

describe('AssingNewgameCoreareasComponent', () => {
  let component: AssingNewgameCoreareasComponent;
  let fixture: ComponentFixture<AssingNewgameCoreareasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssingNewgameCoreareasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssingNewgameCoreareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
