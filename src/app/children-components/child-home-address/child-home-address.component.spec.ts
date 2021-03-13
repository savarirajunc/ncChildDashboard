import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildHomeAddressComponent } from './child-home-address.component';

describe('ChildHomeAddressComponent', () => {
  let component: ChildHomeAddressComponent;
  let fixture: ComponentFixture<ChildHomeAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildHomeAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildHomeAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
