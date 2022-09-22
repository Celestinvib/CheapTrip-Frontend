import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BargainAddComponent } from './bargain-add.component';

describe('BargainAddComponent', () => {
  let component: BargainAddComponent;
  let fixture: ComponentFixture<BargainAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BargainAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BargainAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
