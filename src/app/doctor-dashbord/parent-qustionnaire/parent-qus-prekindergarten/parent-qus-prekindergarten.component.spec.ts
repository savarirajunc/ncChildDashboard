import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentQusPrekindergartenComponent } from './parent-qus-prekindergarten.component';

describe('ParentQusPrekindergartenComponent', () => {
  let component: ParentQusPrekindergartenComponent;
  let fixture: ComponentFixture<ParentQusPrekindergartenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentQusPrekindergartenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentQusPrekindergartenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
