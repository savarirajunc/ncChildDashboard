import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentQusHomeComponent } from './parent-qus-home.component';

describe('ParentQusHomeComponent', () => {
  let component: ParentQusHomeComponent;
  let fixture: ComponentFixture<ParentQusHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentQusHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentQusHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
