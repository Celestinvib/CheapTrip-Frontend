import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BargainInformationComponent } from './bargain-information.component';

describe('BargainInformationComponent', () => {
  let component: BargainInformationComponent;
  let fixture: ComponentFixture<BargainInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BargainInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BargainInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
