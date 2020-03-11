import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcordhomeComponent } from './concordhome.component';

describe('ConcordhomeComponent', () => {
  let component: ConcordhomeComponent;
  let fixture: ComponentFixture<ConcordhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcordhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcordhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
