import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDeshboardComponent } from './main-deshboard.component';

describe('MainDeshboardComponent', () => {
  let component: MainDeshboardComponent;
  let fixture: ComponentFixture<MainDeshboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainDeshboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainDeshboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
