import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppheaderGuestUserComponent } from './appheader-guest-user.component';

describe('AppheaderGuestUserComponent', () => {
  let component: AppheaderGuestUserComponent;
  let fixture: ComponentFixture<AppheaderGuestUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppheaderGuestUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppheaderGuestUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
