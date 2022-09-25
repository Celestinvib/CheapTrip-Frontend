import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogBookmarkedComponent } from './dialog-bookmarked.component';

describe('DialogBookmarkedComponent', () => {
  let component: DialogBookmarkedComponent;
  let fixture: ComponentFixture<DialogBookmarkedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogBookmarkedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogBookmarkedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
