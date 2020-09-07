import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopulationSuiviComponent } from './population-suivi.component';

describe('PopulationSuiviComponent', () => {
  let component: PopulationSuiviComponent;
  let fixture: ComponentFixture<PopulationSuiviComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopulationSuiviComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopulationSuiviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
