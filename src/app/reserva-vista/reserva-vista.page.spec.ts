import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaVistaPage } from './reserva-vista.page';

describe('ReservaVistaPage', () => {
  let component: ReservaVistaPage;
  let fixture: ComponentFixture<ReservaVistaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservaVistaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservaVistaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
