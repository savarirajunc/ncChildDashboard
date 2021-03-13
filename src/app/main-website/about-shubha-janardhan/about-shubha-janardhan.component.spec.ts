import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutShubhaJanardhanComponent } from './about-shubha-janardhan.component';

describe('AboutShubhaJanardhanComponent', () => {
  let component: AboutShubhaJanardhanComponent;
  let fixture: ComponentFixture<AboutShubhaJanardhanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutShubhaJanardhanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutShubhaJanardhanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
