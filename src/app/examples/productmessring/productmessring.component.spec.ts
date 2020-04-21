import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductmessringComponent } from './productmessring.component';

describe('ProductmessringComponent', () => {
  let component: ProductmessringComponent;
  let fixture: ComponentFixture<ProductmessringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductmessringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductmessringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
