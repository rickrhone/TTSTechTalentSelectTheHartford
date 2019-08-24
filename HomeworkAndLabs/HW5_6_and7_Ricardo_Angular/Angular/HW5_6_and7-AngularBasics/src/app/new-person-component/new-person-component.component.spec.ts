import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPersonComponentComponent } from './new-person-component.component';

describe('NewPersonComponentComponent', () => {
  let component: NewPersonComponentComponent;
  let fixture: ComponentFixture<NewPersonComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPersonComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPersonComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
