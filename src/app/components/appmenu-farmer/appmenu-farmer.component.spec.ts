import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppmenuFarmerComponent } from './appmenu-farmer.component';

describe('AppmenuFarmerComponent', () => {
  let component: AppmenuFarmerComponent;
  let fixture: ComponentFixture<AppmenuFarmerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppmenuFarmerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppmenuFarmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
