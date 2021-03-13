import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortChildCoreInterestComponent } from './sort-child-core-interest.component';

describe('SortChildCoreInterestComponent', () => {
  let component: SortChildCoreInterestComponent;
  let fixture: ComponentFixture<SortChildCoreInterestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortChildCoreInterestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortChildCoreInterestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
