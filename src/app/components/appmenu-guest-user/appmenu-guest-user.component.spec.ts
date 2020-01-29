import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppmenuGuestUserComponent } from './appmenu-guest-user.component';

describe('AppmenuGuestUserComponent', () => {
  let component: AppmenuGuestUserComponent;
  let fixture: ComponentFixture<AppmenuGuestUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppmenuGuestUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppmenuGuestUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
