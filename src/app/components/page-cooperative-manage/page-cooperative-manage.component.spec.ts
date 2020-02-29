import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCooperativeManageComponent } from './page-cooperative-manage.component';

describe('PageCooperativeManageComponent', () => {
  let component: PageCooperativeManageComponent;
  let fixture: ComponentFixture<PageCooperativeManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageCooperativeManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCooperativeManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
