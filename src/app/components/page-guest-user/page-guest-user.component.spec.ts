import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageGuestUserComponent } from './page-guest-user.component';

describe('PageGuestUserComponent', () => {
  let component: PageGuestUserComponent;
  let fixture: ComponentFixture<PageGuestUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageGuestUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageGuestUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
