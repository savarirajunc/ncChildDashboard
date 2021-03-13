import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentQustionnaireComponent } from './parent-qustionnaire.component';

describe('ParentQustionnaireComponent', () => {
  let component: ParentQustionnaireComponent;
  let fixture: ComponentFixture<ParentQustionnaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentQustionnaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentQustionnaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
