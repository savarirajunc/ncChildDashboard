import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NcBreadcreumbsComponent } from './nc-breadcreumbs.component';

describe('NcBreadcreumbsComponent', () => {
  let component: NcBreadcreumbsComponent;
  let fixture: ComponentFixture<NcBreadcreumbsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NcBreadcreumbsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NcBreadcreumbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
