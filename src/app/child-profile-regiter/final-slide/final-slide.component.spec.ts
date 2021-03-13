import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalSlideComponent } from './final-slide.component';

describe('FinalSlideComponent', () => {
  let component: FinalSlideComponent;
  let fixture: ComponentFixture<FinalSlideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalSlideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
