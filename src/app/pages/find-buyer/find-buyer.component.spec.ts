import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindBuyerComponent } from './find-buyer.component';

describe('FindBuyerComponent', () => {
  let component: FindBuyerComponent;
  let fixture: ComponentFixture<FindBuyerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindBuyerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindBuyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
