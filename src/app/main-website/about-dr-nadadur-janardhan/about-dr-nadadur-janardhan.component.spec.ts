import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutDrNadadurJanardhanComponent } from './about-dr-nadadur-janardhan.component';

describe('AboutDrNadadurJanardhanComponent', () => {
  let component: AboutDrNadadurJanardhanComponent;
  let fixture: ComponentFixture<AboutDrNadadurJanardhanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutDrNadadurJanardhanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutDrNadadurJanardhanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
