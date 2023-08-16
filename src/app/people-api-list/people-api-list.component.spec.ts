import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleListApiComponent } from './people-api-list.component';

describe('PeopleListApiComponent', () => {
  let component: PeopleListApiComponent;
  let fixture: ComponentFixture<PeopleListApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PeopleListApiComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleListApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
