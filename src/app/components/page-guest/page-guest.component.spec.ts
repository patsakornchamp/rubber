import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageGuestComponent } from './page-guest.component';

describe('PageGuestComponent', () => {
  let component: PageGuestComponent;
  let fixture: ComponentFixture<PageGuestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageGuestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageGuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
