import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HW5NewComponent2Component } from './hw5-new-component2.component';

describe('HW5NewComponent2Component', () => {
  let component: HW5NewComponent2Component;
  let fixture: ComponentFixture<HW5NewComponent2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HW5NewComponent2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HW5NewComponent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
