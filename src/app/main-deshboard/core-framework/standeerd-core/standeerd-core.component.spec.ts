import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandeerdCoreComponent } from './standeerd-core.component';

describe('StandeerdCoreComponent', () => {
  let component: StandeerdCoreComponent;
  let fixture: ComponentFixture<StandeerdCoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandeerdCoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandeerdCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
