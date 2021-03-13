import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildProfilComponent } from './child-profil.component';

describe('ChildProfilComponent', () => {
  let component: ChildProfilComponent;
  let fixture: ComponentFixture<ChildProfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildProfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
