import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  loginError: boolean = false;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  isControlInvalid(controlName: string) {
    const control = this.loginForm.get(controlName);
    return control?.invalid && control?.touched;
  }

  async onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      const authenticated = await this.authService.login(email, password);

      if (authenticated) {
        // Lógica después de iniciar sesión exitosamente
        this.router.navigate(['/mas-populares']);
      } else {
        // Mostrar mensaje de error en el inicio de sesión
        this.loginError = true;
      }
    }
  }
}
