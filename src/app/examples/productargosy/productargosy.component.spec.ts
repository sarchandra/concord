import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductargosyComponent } from './productargosy.component';

describe('ProductargosyComponent', () => {
  let component: ProductargosyComponent;
  let fixture: ComponentFixture<ProductargosyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductargosyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductargosyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
