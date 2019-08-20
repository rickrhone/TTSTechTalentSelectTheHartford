import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationDefaultComponentComponent } from './application-default-component.component';

describe('ApplicationDefaultComponentComponent', () => {
  let component: ApplicationDefaultComponentComponent;
  let fixture: ComponentFixture<ApplicationDefaultComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationDefaultComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationDefaultComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
