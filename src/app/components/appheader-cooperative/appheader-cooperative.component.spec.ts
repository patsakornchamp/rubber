import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppheaderCooperativeComponent } from './appheader-cooperative.component';

describe('AppheaderCooperativeComponent', () => {
  let component: AppheaderCooperativeComponent;
  let fixture: ComponentFixture<AppheaderCooperativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppheaderCooperativeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppheaderCooperativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
