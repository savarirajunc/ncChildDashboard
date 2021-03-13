import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GredingCoreEditComponent } from './greding-core-edit.component';

describe('GredingCoreEditComponent', () => {
  let component: GredingCoreEditComponent;
  let fixture: ComponentFixture<GredingCoreEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GredingCoreEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GredingCoreEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
