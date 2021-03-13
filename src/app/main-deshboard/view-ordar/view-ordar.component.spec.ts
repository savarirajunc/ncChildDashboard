import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOrdarComponent } from './view-ordar.component';

describe('ViewOrdarComponent', () => {
  let component: ViewOrdarComponent;
  let fixture: ComponentFixture<ViewOrdarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewOrdarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewOrdarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
