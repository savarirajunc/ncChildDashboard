import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnounceformComponent } from './announceform.component';

describe('AnnounceformComponent', () => {
  let component: AnnounceformComponent;
  let fixture: ComponentFixture<AnnounceformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnounceformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnounceformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
