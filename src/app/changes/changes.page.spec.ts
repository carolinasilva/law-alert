import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangesPage } from './changes.page';

describe('ChangesPage', () => {
  let component: ChangesPage;
  let fixture: ComponentFixture<ChangesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
