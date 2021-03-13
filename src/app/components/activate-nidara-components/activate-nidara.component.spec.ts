import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivateNidaraComponent } from './activate-nidara.component';

describe('ActivateNidaraComponent', () => {
  let component: ActivateNidaraComponent;
  let fixture: ComponentFixture<ActivateNidaraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivateNidaraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivateNidaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
