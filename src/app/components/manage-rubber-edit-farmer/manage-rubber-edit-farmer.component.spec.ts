import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageRubberEditFarmerComponent } from './manage-rubber-edit-farmer.component';

describe('ManageRubberEditFarmerComponent', () => {
  let component: ManageRubberEditFarmerComponent;
  let fixture: ComponentFixture<ManageRubberEditFarmerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageRubberEditFarmerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageRubberEditFarmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
