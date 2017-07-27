import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterCompo2Component } from './router-compo2.component';

describe('RouterCompo2Component', () => {
  let component: RouterCompo2Component;
  let fixture: ComponentFixture<RouterCompo2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouterCompo2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterCompo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
