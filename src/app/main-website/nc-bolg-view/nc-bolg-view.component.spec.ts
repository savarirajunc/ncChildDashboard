import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NcBolgViewComponent } from './nc-bolg-view.component';

describe('NcBolgViewComponent', () => {
  let component: NcBolgViewComponent;
  let fixture: ComponentFixture<NcBolgViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NcBolgViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NcBolgViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
