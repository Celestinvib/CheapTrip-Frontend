import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogBookedComponent } from './dialog-booked.component';

describe('DialogBookedComponent', () => {
  let component: DialogBookedComponent;
  let fixture: ComponentFixture<DialogBookedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogBookedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogBookedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
