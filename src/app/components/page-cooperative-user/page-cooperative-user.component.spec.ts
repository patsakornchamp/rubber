import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCooperativeUserComponent } from './page-cooperative-user.component';

describe('PageCooperativeUserComponent', () => {
  let component: PageCooperativeUserComponent;
  let fixture: ComponentFixture<PageCooperativeUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageCooperativeUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCooperativeUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
