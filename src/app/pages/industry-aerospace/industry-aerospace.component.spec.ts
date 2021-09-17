import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustryAerospaceComponent } from './industry-aerospace.component';

describe('IndustryAerospaceComponent', () => {
  let component: IndustryAerospaceComponent;
  let fixture: ComponentFixture<IndustryAerospaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndustryAerospaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndustryAerospaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
