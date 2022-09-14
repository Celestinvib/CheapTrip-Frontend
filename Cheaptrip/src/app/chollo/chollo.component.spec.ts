import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CholloComponent } from './chollo.component';

describe('CholloComponent', () => {
  let component: CholloComponent;
  let fixture: ComponentFixture<CholloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CholloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CholloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
