import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageTreeFarmerComponent } from './manage-tree-farmer.component';

describe('ManageTreeFarmerComponent', () => {
  let component: ManageTreeFarmerComponent;
  let fixture: ComponentFixture<ManageTreeFarmerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageTreeFarmerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageTreeFarmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
