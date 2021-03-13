import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreetrialUsersComponent } from './freetrial-users.component';

describe('FreetrialUsersComponent', () => {
  let component: FreetrialUsersComponent;
  let fixture: ComponentFixture<FreetrialUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreetrialUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreetrialUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
