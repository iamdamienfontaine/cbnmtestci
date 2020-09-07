import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannierecookieComponent } from './bannierecookie.component';

describe('BannierecookieComponent', () => {
  let component: BannierecookieComponent;
  let fixture: ComponentFixture<BannierecookieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannierecookieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannierecookieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
