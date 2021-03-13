import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicalInfoComponent } from './physical-info.component';

describe('PhysicalInfoComponent', () => {
  let component: PhysicalInfoComponent;
  let fixture: ComponentFixture<PhysicalInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhysicalInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysicalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
