import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnouncementinsertComponent } from './announcementinsert.component';

describe('AnnouncementinsertComponent', () => {
  let component: AnnouncementinsertComponent;
  let fixture: ComponentFixture<AnnouncementinsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnouncementinsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnouncementinsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
