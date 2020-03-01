import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticsCooperativeComponent } from './statistics-cooperative.component';

describe('StatisticsCooperativeComponent', () => {
  let component: StatisticsCooperativeComponent;
  let fixture: ComponentFixture<StatisticsCooperativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatisticsCooperativeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticsCooperativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
