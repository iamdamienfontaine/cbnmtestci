import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BilanSisalComponent } from './bilan-sisal.component';

describe('BilanSisalComponent', () => {
  let component: BilanSisalComponent;
  let fixture: ComponentFixture<BilanSisalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BilanSisalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BilanSisalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
