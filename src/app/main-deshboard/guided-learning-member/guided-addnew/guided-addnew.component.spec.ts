import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidedAddnewComponent } from './guided-addnew.component';

describe('GuidedAddnewComponent', () => {
  let component: GuidedAddnewComponent;
  let fixture: ComponentFixture<GuidedAddnewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuidedAddnewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuidedAddnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
