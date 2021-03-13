import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChilEmotionComponent } from './view-chil-emotion.component';

describe('ViewChilEmotionComponent', () => {
  let component: ViewChilEmotionComponent;
  let fixture: ComponentFixture<ViewChilEmotionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewChilEmotionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewChilEmotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
