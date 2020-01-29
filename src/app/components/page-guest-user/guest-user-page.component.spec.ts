import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestUserPageComponent } from './guest-user-page.component';

describe('GuestUserPageComponent', () => {
  let component: GuestUserPageComponent;
  let fixture: ComponentFixture<GuestUserPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestUserPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestUserPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
