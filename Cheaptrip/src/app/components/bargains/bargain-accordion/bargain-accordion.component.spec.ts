import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BargainAccordionComponent } from './bargain-accordion.component';

describe('BargainAccordionComponent', () => {
  let component: BargainAccordionComponent;
  let fixture: ComponentFixture<BargainAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BargainAccordionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BargainAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
