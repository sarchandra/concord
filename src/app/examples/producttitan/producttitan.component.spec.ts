import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducttitanComponent } from './producttitan.component';

describe('ProducttitanComponent', () => {
  let component: ProducttitanComponent;
  let fixture: ComponentFixture<ProducttitanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProducttitanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProducttitanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
