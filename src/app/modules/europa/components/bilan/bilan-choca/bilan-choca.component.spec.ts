import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BilanChocaComponent } from './bilan-choca.component';

describe('BilanChocaComponent', () => {
  let component: BilanChocaComponent;
  let fixture: ComponentFixture<BilanChocaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BilanChocaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BilanChocaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
