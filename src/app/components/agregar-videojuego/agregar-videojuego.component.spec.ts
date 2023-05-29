import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarVideojuegoComponent } from './agregar-videojuego.component';

describe('AgregarVideojuegoComponent', () => {
  let component: AgregarVideojuegoComponent;
  let fixture: ComponentFixture<AgregarVideojuegoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarVideojuegoComponent]
    });
    fixture = TestBed.createComponent(AgregarVideojuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
