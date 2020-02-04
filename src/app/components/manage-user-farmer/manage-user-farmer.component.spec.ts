import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageUserFarmerComponent } from './manage-user-farmer.component';

describe('ManageUserFarmerComponent', () => {
  let component: ManageUserFarmerComponent;
  let fixture: ComponentFixture<ManageUserFarmerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageUserFarmerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageUserFarmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
