import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductrecsaComponent } from './productrecsa.component';

describe('ProductrecsaComponent', () => {
  let component: ProductrecsaComponent;
  let fixture: ComponentFixture<ProductrecsaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductrecsaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductrecsaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
