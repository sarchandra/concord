import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductanotronicComponent } from './productanotronic.component';

describe('ProductanotronicComponent', () => {
  let component: ProductanotronicComponent;
  let fixture: ComponentFixture<ProductanotronicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductanotronicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductanotronicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
