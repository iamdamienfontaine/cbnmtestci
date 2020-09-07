import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopulationSuiviFataqueComponent } from './population-suivi-fataque.component';

describe('PopulationSuiviFataqueComponent', () => {
  let component: PopulationSuiviFataqueComponent;
  let fixture: ComponentFixture<PopulationSuiviFataqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopulationSuiviFataqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopulationSuiviFataqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
