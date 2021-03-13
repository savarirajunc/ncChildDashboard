import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildDevelopmenComponent } from './child-developmen.component';

describe('ChildDevelopmenComponent', () => {
  let component: ChildDevelopmenComponent;
  let fixture: ComponentFixture<ChildDevelopmenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildDevelopmenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildDevelopmenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
