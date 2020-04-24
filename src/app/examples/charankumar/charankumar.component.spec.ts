import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharankumarComponent } from './charankumar.component';

describe('CharankumarComponent', () => {
  let component: CharankumarComponent;
  let fixture: ComponentFixture<CharankumarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharankumarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharankumarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
