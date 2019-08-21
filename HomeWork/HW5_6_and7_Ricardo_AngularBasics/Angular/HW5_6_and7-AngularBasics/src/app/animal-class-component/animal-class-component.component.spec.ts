import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalClassComponentComponent } from './animal-class-component.component';

describe('AnimalClassComponentComponent', () => {
  let component: AnimalClassComponentComponent;
  let fixture: ComponentFixture<AnimalClassComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalClassComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalClassComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
