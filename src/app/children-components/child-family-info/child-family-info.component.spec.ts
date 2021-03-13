import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildFamilyInfoComponent } from './child-family-info.component';

describe('ChildFamilyInfoComponent', () => {
  let component: ChildFamilyInfoComponent;
  let fixture: ComponentFixture<ChildFamilyInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildFamilyInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildFamilyInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
