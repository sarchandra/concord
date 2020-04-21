import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductroscomComponent } from './productroscom.component';

describe('ProductroscomComponent', () => {
  let component: ProductroscomComponent;
  let fixture: ComponentFixture<ProductroscomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductroscomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductroscomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
