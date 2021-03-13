import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViedoComponent } from './viedo.component';

describe('ViedoComponent', () => {
  let component: ViedoComponent;
  let fixture: ComponentFixture<ViedoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViedoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViedoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
