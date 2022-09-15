import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BargainCountdownComponent } from './bargain-countdown.component';

describe('BargainCountdownComponent', () => {
  let component: BargainCountdownComponent;
  let fixture: ComponentFixture<BargainCountdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BargainCountdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BargainCountdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
