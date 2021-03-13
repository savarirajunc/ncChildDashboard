import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaregiverGuideComponent } from './caregiver-guide.component';

describe('CaregiverGuideComponent', () => {
  let component: CaregiverGuideComponent;
  let fixture: ComponentFixture<CaregiverGuideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaregiverGuideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaregiverGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
