import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BargainsBookmarkedComponent } from './bargains-bookmarked.component';

describe('BargainsBookmarkedComponent', () => {
  let component: BargainsBookmarkedComponent;
  let fixture: ComponentFixture<BargainsBookmarkedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BargainsBookmarkedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BargainsBookmarkedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
