import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TromelinComponent } from './tromelin.component';

describe('TromelinComponent', () => {
  let component: TromelinComponent;
  let fixture: ComponentFixture<TromelinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TromelinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TromelinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
