import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppmenuCooperativeComponent } from './appmenu-cooperative.component';

describe('AppmenuCooperativeComponent', () => {
  let component: AppmenuCooperativeComponent;
  let fixture: ComponentFixture<AppmenuCooperativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppmenuCooperativeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppmenuCooperativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
