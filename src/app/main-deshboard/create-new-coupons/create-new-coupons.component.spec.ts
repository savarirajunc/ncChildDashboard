import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewCouponsComponent } from './create-new-coupons.component';

describe('CreateNewCouponsComponent', () => {
  let component: CreateNewCouponsComponent;
  let fixture: ComponentFixture<CreateNewCouponsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateNewCouponsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewCouponsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
