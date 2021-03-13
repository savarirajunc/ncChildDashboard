import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreHealthComponent } from './core-health.component';

describe('CoreHealthComponent', () => {
  let component: CoreHealthComponent;
  let fixture: ComponentFixture<CoreHealthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoreHealthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreHealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
