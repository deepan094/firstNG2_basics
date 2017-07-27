import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterCompo1Component } from './router-compo1.component';

describe('RouterCompo1Component', () => {
  let component: RouterCompo1Component;
  let fixture: ComponentFixture<RouterCompo1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouterCompo1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterCompo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
