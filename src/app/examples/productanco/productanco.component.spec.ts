import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductancoComponent } from './productanco.component';

describe('ProductancoComponent', () => {
  let component: ProductancoComponent;
  let fixture: ComponentFixture<ProductancoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductancoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductancoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
