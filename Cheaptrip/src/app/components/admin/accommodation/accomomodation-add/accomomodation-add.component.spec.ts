import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccomomodationAddComponent } from './accomomodation-add.component';

describe('AccomomodationAddComponent', () => {
  let component: AccomomodationAddComponent;
  let fixture: ComponentFixture<AccomomodationAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccomomodationAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccomomodationAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
