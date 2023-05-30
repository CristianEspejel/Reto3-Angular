import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  constructor(private router: Router) {}

  salir() {
    // Realizar las operaciones de cierre de sesión si es necesario

    // Redirigir al componente de inicio de sesión
    this.router.navigate(['/login']);
  }
}

