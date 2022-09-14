import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChollosReservadosComponent } from './chollos-reservados.component';

describe('ChollosReservadosComponent', () => {
  let component: ChollosReservadosComponent;
  let fixture: ComponentFixture<ChollosReservadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChollosReservadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChollosReservadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
