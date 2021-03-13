import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreFrameworkComponent } from './core-framework.component';

describe('CoreFrameworkComponent', () => {
  let component: CoreFrameworkComponent;
  let fixture: ComponentFixture<CoreFrameworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoreFrameworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreFrameworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
