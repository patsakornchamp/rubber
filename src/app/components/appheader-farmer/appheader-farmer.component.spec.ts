import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppheaderFarmerComponent } from './appheader-farmer.component';

describe('AppheaderFarmerComponent', () => {
  let component: AppheaderFarmerComponent;
  let fixture: ComponentFixture<AppheaderFarmerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppheaderFarmerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppheaderFarmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
