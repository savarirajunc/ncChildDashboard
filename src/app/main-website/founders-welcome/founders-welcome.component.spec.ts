import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundersWelcomeComponent } from './founders-welcome.component';

describe('FoundersWelcomeComponent', () => {
  let component: FoundersWelcomeComponent;
  let fixture: ComponentFixture<FoundersWelcomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoundersWelcomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoundersWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
