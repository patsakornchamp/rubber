import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppmenuAdminComponent } from './appmenu-admin.component';

describe('AppmenuAdminComponent', () => {
  let component: AppmenuAdminComponent;
  let fixture: ComponentFixture<AppmenuAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppmenuAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppmenuAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
