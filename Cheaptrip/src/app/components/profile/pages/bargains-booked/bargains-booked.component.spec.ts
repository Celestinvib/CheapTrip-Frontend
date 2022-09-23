import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BargainsBookedComponent } from './bargains-booked.component';

describe('BargainsBookedComponent', () => {
  let component: BargainsBookedComponent;
  let fixture: ComponentFixture<BargainsBookedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BargainsBookedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BargainsBookedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
