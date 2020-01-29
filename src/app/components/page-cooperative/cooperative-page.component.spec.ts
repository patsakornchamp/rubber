import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CooperativePageComponent } from './cooperative-page.component';

describe('CooperativePageComponent', () => {
  let component: CooperativePageComponent;
  let fixture: ComponentFixture<CooperativePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CooperativePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CooperativePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
