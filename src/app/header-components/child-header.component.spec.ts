import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildHeaderComponent } from './child-header.component';

describe('ChildHeaderComponent', () => {
  let component: ChildHeaderComponent;
  let fixture: ComponentFixture<ChildHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
