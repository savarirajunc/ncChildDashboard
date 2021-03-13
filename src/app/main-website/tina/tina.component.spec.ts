import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TinaComponent } from './tina.component';

describe('TinaComponent', () => {
  let component: TinaComponent;
  let fixture: ComponentFixture<TinaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TinaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
