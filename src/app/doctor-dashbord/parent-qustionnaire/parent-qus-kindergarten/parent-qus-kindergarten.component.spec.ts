import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentQusKindergartenComponent } from './parent-qus-kindergarten.component';

describe('ParentQusKindergartenComponent', () => {
  let component: ParentQusKindergartenComponent;
  let fixture: ComponentFixture<ParentQusKindergartenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentQusKindergartenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentQusKindergartenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
