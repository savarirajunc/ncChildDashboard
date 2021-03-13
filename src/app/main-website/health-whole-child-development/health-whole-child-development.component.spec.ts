import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthWholeChildDevelopmentComponent } from './health-whole-child-development.component';

describe('HealthWholeChildDevelopmentComponent', () => {
  let component: HealthWholeChildDevelopmentComponent;
  let fixture: ComponentFixture<HealthWholeChildDevelopmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthWholeChildDevelopmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthWholeChildDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
