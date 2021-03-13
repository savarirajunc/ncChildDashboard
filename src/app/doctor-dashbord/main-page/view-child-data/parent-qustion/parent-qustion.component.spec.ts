import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentQustionComponent } from './parent-qustion.component';

describe('ParentQustionComponent', () => {
  let component: ParentQustionComponent;
  let fixture: ComponentFixture<ParentQustionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentQustionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentQustionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
