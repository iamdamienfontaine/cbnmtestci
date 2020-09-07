import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopulationDialogComponent } from './population-dialog.component';

describe('PopulationDialogComponent', () => {
  let component: PopulationDialogComponent;
  let fixture: ComponentFixture<PopulationDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopulationDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopulationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
