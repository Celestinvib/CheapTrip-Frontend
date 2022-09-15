import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesplegablescholloComponent } from './desplegableschollo.component';

describe('DesplegablescholloComponent', () => {
  let component: DesplegablescholloComponent;
  let fixture: ComponentFixture<DesplegablescholloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesplegablescholloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesplegablescholloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
