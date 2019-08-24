import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewpersonreactiveformComponent } from './newpersonreactiveform.component';

describe('NewpersonreactiveformComponent', () => {
  let component: NewpersonreactiveformComponent;
  let fixture: ComponentFixture<NewpersonreactiveformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewpersonreactiveformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewpersonreactiveformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
