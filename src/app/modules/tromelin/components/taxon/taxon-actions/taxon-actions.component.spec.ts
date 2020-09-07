import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxonActionsComponent } from './taxon-actions.component';

describe('TaxonActionsComponent', () => {
  let component: TaxonActionsComponent;
  let fixture: ComponentFixture<TaxonActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxonActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxonActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
