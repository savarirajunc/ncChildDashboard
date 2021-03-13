import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteInvoiceComponent } from './complete-invoice.component';

describe('CompleteInvoiceComponent', () => {
  let component: CompleteInvoiceComponent;
  let fixture: ComponentFixture<CompleteInvoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompleteInvoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompleteInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
