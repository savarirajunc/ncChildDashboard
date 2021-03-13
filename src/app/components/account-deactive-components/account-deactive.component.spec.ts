import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountDeactiveComponent } from './account-deactive.component';

describe('AccountDeactiveComponent', () => {
  let component: AccountDeactiveComponent;
  let fixture: ComponentFixture<AccountDeactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountDeactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountDeactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
