import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopulationsListComponent } from './populations-list.component';

describe('PopulationsListComponent', () => {
  let component: PopulationsListComponent;
  let fixture: ComponentFixture<PopulationsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopulationsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopulationsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
