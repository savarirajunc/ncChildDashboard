import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrenRegisterComponent } from './children-register.component';

describe('ChildrenRegisterComponent', () => {
  let component: ChildrenRegisterComponent;
  let fixture: ComponentFixture<ChildrenRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildrenRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildrenRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
