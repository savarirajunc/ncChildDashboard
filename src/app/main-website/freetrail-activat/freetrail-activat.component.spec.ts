import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreetrailActivatComponent } from './freetrail-activat.component';

describe('FreetrailActivatComponent', () => {
  let component: FreetrailActivatComponent;
  let fixture: ComponentFixture<FreetrailActivatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreetrailActivatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreetrailActivatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
