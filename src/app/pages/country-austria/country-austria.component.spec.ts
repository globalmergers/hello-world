import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryAustriaComponent } from './country-austria.component';

describe('CountryAustriaComponent', () => {
  let component: CountryAustriaComponent;
  let fixture: ComponentFixture<CountryAustriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryAustriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryAustriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
