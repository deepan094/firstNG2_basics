import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Route11Component } from './route1-1.component';

describe('Route11Component', () => {
  let component: Route11Component;
  let fixture: ComponentFixture<Route11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Route11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Route11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
