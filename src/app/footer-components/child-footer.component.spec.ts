import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildFooterComponent } from './child-footer.component';

describe('ChildFooterComponent', () => {
  let component: ChildFooterComponent;
  let fixture: ComponentFixture<ChildFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
