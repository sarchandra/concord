import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Product4aComponent } from './product4a.component';

describe('Product4aComponent', () => {
  let component: Product4aComponent;
  let fixture: ComponentFixture<Product4aComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Product4aComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Product4aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
