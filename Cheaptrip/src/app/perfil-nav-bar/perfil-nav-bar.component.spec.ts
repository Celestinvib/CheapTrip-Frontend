import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilNavBarComponent } from './perfil-nav-bar.component';

describe('PerfilNavBarComponent', () => {
  let component: PerfilNavBarComponent;
  let fixture: ComponentFixture<PerfilNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilNavBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
