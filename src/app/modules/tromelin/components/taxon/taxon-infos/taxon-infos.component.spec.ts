import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxonInfosComponent } from './taxon-infos.component';

describe('TaxonInfosComponent', () => {
  let component: TaxonInfosComponent;
  let fixture: ComponentFixture<TaxonInfosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxonInfosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxonInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
