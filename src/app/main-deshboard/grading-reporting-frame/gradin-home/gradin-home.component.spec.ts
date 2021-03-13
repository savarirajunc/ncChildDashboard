import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradinHomeComponent } from './gradin-home.component';

describe('GradinHomeComponent', () => {
  let component: GradinHomeComponent;
  let fixture: ComponentFixture<GradinHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradinHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradinHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
