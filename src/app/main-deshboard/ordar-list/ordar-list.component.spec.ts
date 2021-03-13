import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdarListComponent } from './ordar-list.component';

describe('OrdarListComponent', () => {
  let component: OrdarListComponent;
  let fixture: ComponentFixture<OrdarListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdarListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdarListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
