import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreInterestComponent } from './core-interest.component';

describe('CoreInterestComponent', () => {
  let component: CoreInterestComponent;
  let fixture: ComponentFixture<CoreInterestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoreInterestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreInterestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
