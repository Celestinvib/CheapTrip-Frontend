import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BargainsListComponent } from './bargains-list.component';

describe('BargainsListComponent', () => {
  let component: BargainsListComponent;
  let fixture: ComponentFixture<BargainsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BargainsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BargainsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
