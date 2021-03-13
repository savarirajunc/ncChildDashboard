import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorialPolicyComponent } from './editorial-policy.component';

describe('EditorialPolicyComponent', () => {
  let component: EditorialPolicyComponent;
  let fixture: ComponentFixture<EditorialPolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorialPolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorialPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
