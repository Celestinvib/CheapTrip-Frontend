import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChollosFavoritosComponent } from './chollos-favoritos.component';

describe('ChollosFavoritosComponent', () => {
  let component: ChollosFavoritosComponent;
  let fixture: ComponentFixture<ChollosFavoritosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChollosFavoritosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChollosFavoritosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
