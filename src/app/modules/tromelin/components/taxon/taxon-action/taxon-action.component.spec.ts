import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxonActionComponent } from './taxon-action.component';

describe('TaxonActionComponent', () => {
  let component: TaxonActionComponent;
  let fixture: ComponentFixture<TaxonActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxonActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxonActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
