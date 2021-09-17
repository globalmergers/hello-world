import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinGlobalmergersComponent } from './join-globalmergers.component';

describe('JoinGlobalmergersComponent', () => {
  let component: JoinGlobalmergersComponent;
  let fixture: ComponentFixture<JoinGlobalmergersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoinGlobalmergersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinGlobalmergersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
