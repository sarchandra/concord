import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductlanatusComponent } from './productlanatus.component';

describe('ProductlanatusComponent', () => {
  let component: ProductlanatusComponent;
  let fixture: ComponentFixture<ProductlanatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductlanatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductlanatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
