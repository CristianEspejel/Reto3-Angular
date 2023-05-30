import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Juego } from './juego.model';

@Component({
  selector: 'app-agregar-videojuego',
  templateUrl: './agregar-videojuego.component.html',
  styleUrls: ['./agregar-videojuego.component.scss']
})
export class AgregarJuegoComponent implements OnInit {
  juegoForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.juegoForm = new FormGroup({});
  }

  ngOnInit() {
    this.juegoForm = this.formBuilder.group({
      titulo: ['', Validators.required],
      calificacion: ['', Validators.required],
      descripcion: ['', Validators.required],
      fechaLanzamiento: ['', Validators.required],
      numDescargas: ['', Validators.required],
      proximamente: [false]
    });
  }

  agregarJuego() {
    if (this.juegoForm.valid) {
      const juegoData = this.juegoForm.value;

      // Obtener la lista actual de juegos desde localStorage
      const juegosString = localStorage.getItem('juegos');
      const juegos: Juego[] = juegosString ? JSON.parse(juegosString) : [];

      // Agregar el nuevo juego a la lista
      juegos.push(juegoData);

      // Guardar la lista actualizada en localStorage
      localStorage.setItem('juegos', JSON.stringify(juegos));

      // Mostrar notificación de éxito
      alert('Los datos del juego se han guardado correctamente');

      // Reiniciar el formulario
      this.juegoForm.reset();
    }
  }
}
