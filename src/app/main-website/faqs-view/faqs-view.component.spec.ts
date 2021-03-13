import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqsViewComponent } from './faqs-view.component';

describe('FaqsViewComponent', () => {
  let component: FaqsViewComponent;
  let fixture: ComponentFixture<FaqsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaqsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
