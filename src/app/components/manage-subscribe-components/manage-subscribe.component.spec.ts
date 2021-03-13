import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageSubscribeComponent } from './manage-subscribe.component';

describe('ManageSubscribeComponent', () => {
  let component: ManageSubscribeComponent;
  let fixture: ComponentFixture<ManageSubscribeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageSubscribeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageSubscribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
