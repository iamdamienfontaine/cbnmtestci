import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopulationBilanComponent } from './population-bilan.component';

describe('PopulationBilanComponent', () => {
  let component: PopulationBilanComponent;
  let fixture: ComponentFixture<PopulationBilanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopulationBilanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopulationBilanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
