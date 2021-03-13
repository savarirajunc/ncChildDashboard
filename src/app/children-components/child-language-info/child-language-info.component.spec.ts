import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildLanguageInfoComponent } from './child-language-info.component';

describe('ChildLanguageInfoComponent', () => {
  let component: ChildLanguageInfoComponent;
  let fixture: ComponentFixture<ChildLanguageInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildLanguageInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildLanguageInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
