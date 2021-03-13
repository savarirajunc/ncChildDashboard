import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewchildreninformationComponent } from './viewchildreninformation.component';

describe('ViewchildreninformationComponent', () => {
  let component: ViewchildreninformationComponent;
  let fixture: ComponentFixture<ViewchildreninformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewchildreninformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewchildreninformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
