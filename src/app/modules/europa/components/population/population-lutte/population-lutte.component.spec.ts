import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopulationLutteComponent } from './population-lutte.component';

describe('PopulationActionComponent', () => {
  let component: PopulationLutteComponent;
  let fixture: ComponentFixture<PopulationLutteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopulationLutteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopulationLutteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
