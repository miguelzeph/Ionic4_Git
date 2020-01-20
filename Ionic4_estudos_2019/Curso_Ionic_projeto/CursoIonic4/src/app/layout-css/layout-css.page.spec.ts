import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutCssPage } from './layout-css.page';

describe('LayoutCssPage', () => {
  let component: LayoutCssPage;
  let fixture: ComponentFixture<LayoutCssPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutCssPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutCssPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
