import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessfulBayComponent } from './successful-bay.component';

describe('SuccessfulBayComponent', () => {
  let component: SuccessfulBayComponent;
  let fixture: ComponentFixture<SuccessfulBayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessfulBayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessfulBayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
