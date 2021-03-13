import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addmore3Component } from './addmore3.component';

describe('Addmore3Component', () => {
  let component: Addmore3Component;
  let fixture: ComponentFixture<Addmore3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addmore3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addmore3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
