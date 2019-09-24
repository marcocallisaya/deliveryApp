import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoVistaPage } from './pedido-vista.page';

describe('PedidoVistaPage', () => {
  let component: PedidoVistaPage;
  let fixture: ComponentFixture<PedidoVistaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidoVistaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidoVistaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
