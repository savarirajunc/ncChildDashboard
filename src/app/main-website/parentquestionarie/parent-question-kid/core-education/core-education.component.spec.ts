import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreEducationComponent } from './core-education.component';

describe('CoreEducationComponent', () => {
  let component: CoreEducationComponent;
  let fixture: ComponentFixture<CoreEducationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoreEducationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
