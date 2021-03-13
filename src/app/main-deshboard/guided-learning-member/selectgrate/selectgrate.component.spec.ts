import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectgrateComponent } from './selectgrate.component';

describe('SelectgrateComponent', () => {
  let component: SelectgrateComponent;
  let fixture: ComponentFixture<SelectgrateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectgrateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectgrateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
