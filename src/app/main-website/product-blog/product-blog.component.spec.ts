import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductBlogComponent } from './product-blog.component';

describe('ProductBlogComponent', () => {
  let component: ProductBlogComponent;
  let fixture: ComponentFixture<ProductBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
