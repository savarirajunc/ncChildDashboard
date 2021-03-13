import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentInvocieComponent } from './parent-invocie.component';

describe('ParentInvocieComponent', () => {
  let component: ParentInvocieComponent;
  let fixture: ComponentFixture<ParentInvocieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentInvocieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentInvocieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
