import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodByeComponent } from './good-bye.component';

describe('GoodByeComponent', () => {
  let component: GoodByeComponent;
  let fixture: ComponentFixture<GoodByeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoodByeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoodByeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
