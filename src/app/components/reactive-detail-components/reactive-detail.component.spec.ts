import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveDetailComponent } from './reactive-detail.component';

describe('ReactiveDetailComponent', () => {
  let component: ReactiveDetailComponent;
  let fixture: ComponentFixture<ReactiveDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
