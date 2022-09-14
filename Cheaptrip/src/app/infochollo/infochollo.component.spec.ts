import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfocholloComponent } from './infochollo.component';

describe('InfocholloComponent', () => {
  let component: InfocholloComponent;
  let fixture: ComponentFixture<InfocholloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfocholloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfocholloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
