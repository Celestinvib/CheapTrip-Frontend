import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccomomodationListComponent } from './accomomodation-list.component';

describe('AccomomodationListComponent', () => {
  let component: AccomomodationListComponent;
  let fixture: ComponentFixture<AccomomodationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccomomodationListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccomomodationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
