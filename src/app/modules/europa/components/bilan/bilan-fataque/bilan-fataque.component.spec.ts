import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BilanFataqueComponent } from './bilan-fataque.component';

describe('BilanFataqueComponent', () => {
  let component: BilanFataqueComponent;
  let fixture: ComponentFixture<BilanFataqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BilanFataqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BilanFataqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
