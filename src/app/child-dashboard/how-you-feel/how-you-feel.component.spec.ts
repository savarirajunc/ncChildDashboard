import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HowYouFeelComponent } from './how-you-feel.component';

describe('HowYouFeelComponent', () => {
  let component: HowYouFeelComponent;
  let fixture: ComponentFixture<HowYouFeelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowYouFeelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowYouFeelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
