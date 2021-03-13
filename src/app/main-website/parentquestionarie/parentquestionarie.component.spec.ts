import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentquestionarieComponent } from './parentquestionarie.component';

describe('ParentquestionarieComponent', () => {
  let component: ParentquestionarieComponent;
  let fixture: ComponentFixture<ParentquestionarieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentquestionarieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentquestionarieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
