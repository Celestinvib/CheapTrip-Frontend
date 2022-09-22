import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BargainsUpdateComponent } from './bargains-update.component';

describe('BargainsUpdateComponent', () => {
  let component: BargainsUpdateComponent;
  let fixture: ComponentFixture<BargainsUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BargainsUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BargainsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
