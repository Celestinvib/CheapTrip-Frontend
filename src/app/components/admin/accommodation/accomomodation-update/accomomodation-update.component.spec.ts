import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccomomodationUpdateComponent } from './accomomodation-update.component';

describe('AccomomodationUpdateComponent', () => {
  let component: AccomomodationUpdateComponent;
  let fixture: ComponentFixture<AccomomodationUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccomomodationUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccomomodationUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
