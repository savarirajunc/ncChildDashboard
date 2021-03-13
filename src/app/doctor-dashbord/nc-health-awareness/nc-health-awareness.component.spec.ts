import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NcHealthAwarenessComponent } from './nc-health-awareness.component';

describe('NcHealthAwarenessComponent', () => {
  let component: NcHealthAwarenessComponent;
  let fixture: ComponentFixture<NcHealthAwarenessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NcHealthAwarenessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NcHealthAwarenessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
