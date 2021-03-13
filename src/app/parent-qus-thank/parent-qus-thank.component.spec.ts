import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentQusThankComponent } from './parent-qus-thank.component';

describe('ParentQusThankComponent', () => {
  let component: ParentQusThankComponent;
  let fixture: ComponentFixture<ParentQusThankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentQusThankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentQusThankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
