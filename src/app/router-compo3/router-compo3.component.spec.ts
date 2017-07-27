import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterCompo3Component } from './router-compo3.component';

describe('RouterCompo3Component', () => {
  let component: RouterCompo3Component;
  let fixture: ComponentFixture<RouterCompo3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouterCompo3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterCompo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
