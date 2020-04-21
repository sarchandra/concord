import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductrotadataComponent } from './productrotadata.component';

describe('ProductrotadataComponent', () => {
  let component: ProductrotadataComponent;
  let fixture: ComponentFixture<ProductrotadataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductrotadataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductrotadataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
