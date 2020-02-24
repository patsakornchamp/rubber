import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageRubberAddFarmerComponent } from './manage-rubber-add-farmer.component';

describe('ManageRubberAddFarmerComponent', () => {
  let component: ManageRubberAddFarmerComponent;
  let fixture: ComponentFixture<ManageRubberAddFarmerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageRubberAddFarmerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageRubberAddFarmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
