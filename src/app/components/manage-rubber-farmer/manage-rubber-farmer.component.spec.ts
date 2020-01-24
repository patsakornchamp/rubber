import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageRubberFarmerComponent } from './manage-rubber-farmer.component';

describe('ManageRubberFarmerComponent', () => {
  let component: ManageRubberFarmerComponent;
  let fixture: ComponentFixture<ManageRubberFarmerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageRubberFarmerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageRubberFarmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
