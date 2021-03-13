import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildEduInformationComponent } from './child-edu-information.component';

describe('ChildEduInformationComponent', () => {
  let component: ChildEduInformationComponent;
  let fixture: ComponentFixture<ChildEduInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildEduInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildEduInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
