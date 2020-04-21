import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductlmtComponent } from './productlmt.component';

describe('ProductlmtComponent', () => {
  let component: ProductlmtComponent;
  let fixture: ComponentFixture<ProductlmtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductlmtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductlmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
