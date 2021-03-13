import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentInvocieListComponent } from './parent-invocie-list.component';

describe('ParentInvocieListComponent', () => {
  let component: ParentInvocieListComponent;
  let fixture: ComponentFixture<ParentInvocieListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentInvocieListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentInvocieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
