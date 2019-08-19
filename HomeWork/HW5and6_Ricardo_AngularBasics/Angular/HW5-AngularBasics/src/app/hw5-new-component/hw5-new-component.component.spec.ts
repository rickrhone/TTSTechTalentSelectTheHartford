import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HW5NewComponentComponent } from './hw5-new-component.component';

describe('HW5NewComponentComponent', () => {
  let component: HW5NewComponentComponent;
  let fixture: ComponentFixture<HW5NewComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HW5NewComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HW5NewComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
