import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallparentinformationComponent } from './viewallparentinformation.component';

describe('ViewallparentinformationComponent', () => {
  let component: ViewallparentinformationComponent;
  let fixture: ComponentFixture<ViewallparentinformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewallparentinformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewallparentinformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
