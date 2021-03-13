import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildCaregiverInfoComponent } from './child-caregiver-info.component';

describe('ChildCaregiverInfoComponent', () => {
  let component: ChildCaregiverInfoComponent;
  let fixture: ComponentFixture<ChildCaregiverInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildCaregiverInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildCaregiverInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
