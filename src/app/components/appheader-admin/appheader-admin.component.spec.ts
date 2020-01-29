import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppheaderAdminComponent } from './appheader-admin.component';

describe('AppheaderAdminComponent', () => {
  let component: AppheaderAdminComponent;
  let fixture: ComponentFixture<AppheaderAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppheaderAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppheaderAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
