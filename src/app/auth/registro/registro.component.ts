import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/service/auth.service';
import { User } from '../user.model';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  registroForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.registroForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    });
  }

  isControlInvalid(controlName: string) {
    const control = this.registroForm.get(controlName);
    return control?.invalid && control?.touched;
  }

  onSubmit() {
    if (this.registroForm.valid) {
      // Obtener los valores del formulario
      const { name, email, password } = this.registroForm.value;

      // Crear un objeto usuario
      const user: User = {
        id: 0, // El ID se asignará automáticamente en el servicio AuthService
        name,
        email,
        password
      };

      // Obtener la lista actual de usuarios desde localStorage
      const usersString = localStorage.getItem('users');
      const users: User[] = usersString ? JSON.parse(usersString) : [];

      // Verificar si el usuario ya existe
      const userExists = users.some(u => u.email === email);

      if (userExists) {
        console.log('El usuario ya existe');
      } else {
        // Agregar el nuevo usuario a la lista
        users.push(user);

        // Guardar la lista actualizada en localStorage
        localStorage.setItem('users', JSON.stringify(users));

        // Registro exitoso, redirigir al componente de inicio de sesión
        this.router.navigate(['/login']);
      }
    }
  }
  regresar() {
    this.router.navigate(['/login']);
  }
}
