import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildNutritionComponent } from './child-nutrition.component';

describe('ChildNutritionComponent', () => {
  let component: ChildNutritionComponent;
  let fixture: ComponentFixture<ChildNutritionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildNutritionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildNutritionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
