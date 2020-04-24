import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RavindranathComponent } from './ravindranath.component';

describe('RavindranathComponent', () => {
  let component: RavindranathComponent;
  let fixture: ComponentFixture<RavindranathComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RavindranathComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RavindranathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
