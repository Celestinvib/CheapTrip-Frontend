import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpireSoonComponent } from './expire-soon.component';

describe('ExpireSoonComponent', () => {
  let component: ExpireSoonComponent;
  let fixture: ComponentFixture<ExpireSoonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpireSoonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpireSoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
