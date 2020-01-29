import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppheaderAdmincooperativeComponent } from './appheader-admincooperative.component';

describe('AppheaderAdmincooperativeComponent', () => {
  let component: AppheaderAdmincooperativeComponent;
  let fixture: ComponentFixture<AppheaderAdmincooperativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppheaderAdmincooperativeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppheaderAdmincooperativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
