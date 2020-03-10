import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticsGuestComponent } from './statistics-guest.component';

describe('StatisticsGuestComponent', () => {
  let component: StatisticsGuestComponent;
  let fixture: ComponentFixture<StatisticsGuestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatisticsGuestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticsGuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
