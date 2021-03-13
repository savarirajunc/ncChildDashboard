import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticeOfPrivacyPracticesComponent } from './notice-of-privacy-practices.component';

describe('NoticeOfPrivacyPracticesComponent', () => {
  let component: NoticeOfPrivacyPracticesComponent;
  let fixture: ComponentFixture<NoticeOfPrivacyPracticesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticeOfPrivacyPracticesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticeOfPrivacyPracticesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
