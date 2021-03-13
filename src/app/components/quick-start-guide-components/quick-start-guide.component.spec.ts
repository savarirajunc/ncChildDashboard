import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickStartGuideComponent } from './quick-start-guide.component';

describe('QuickStartGuideComponent', () => {
  let component: QuickStartGuideComponent;
  let fixture: ComponentFixture<QuickStartGuideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickStartGuideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickStartGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
