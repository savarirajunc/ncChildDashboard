import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalConcernComponent } from './medical-concern.component';

describe('MedicalConcernComponent', () => {
  let component: MedicalConcernComponent;
  let fixture: ComponentFixture<MedicalConcernComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalConcernComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalConcernComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
