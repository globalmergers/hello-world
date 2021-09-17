import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindABuyerComponent } from './find-a-buyer.component';

describe('FindABuyerComponent', () => {
  let component: FindABuyerComponent;
  let fixture: ComponentFixture<FindABuyerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindABuyerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindABuyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
