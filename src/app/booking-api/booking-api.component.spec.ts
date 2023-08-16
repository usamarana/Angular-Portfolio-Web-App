import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingApiComponent } from './booking-api.component';

describe('BookingApiComponent', () => {
  let component: BookingApiComponent;
  let fixture: ComponentFixture<BookingApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookingApiComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
