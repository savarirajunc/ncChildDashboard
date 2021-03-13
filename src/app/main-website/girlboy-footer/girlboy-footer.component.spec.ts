import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GirlboyFooterComponent } from './girlboy-footer.component';

describe('GirlboyFooterComponent', () => {
  let component: GirlboyFooterComponent;
  let fixture: ComponentFixture<GirlboyFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GirlboyFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GirlboyFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
