import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../auth/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users: User[] = [];

  constructor(private http: HttpClient) {
    this.loadUsers();
  }

  private loadUsers() {
    this.http.get<{ users: User[] }>('assets/users.json').subscribe(data => {
      this.users = data.users;
    });
  }

  login(email: string, password: string): User | null {
    const user = this.users.find(u => u.email === email && u.password === password);
    return user || null;
  }

  register(user: User): boolean {
    const existingUser = this.users.find(u => u.email === user.email);
    if (existingUser) {
      return false; // El usuario ya existe
    }

    // Asignar un nuevo ID al usuario
    const newUserId = this.users.length + 1;
    user.id = newUserId;

    // Agregar el nuevo usuario al array de usuarios
    this.users.push(user);

    // Guardar los usuarios actualizados en el archivo JSON
    this.saveUsers();

    return true; // Registro exitoso
  }

  private saveUsers() {
    const data = { users: this.users };
    const jsonData = JSON.stringify(data, null, 2);

    // Guardar los usuarios en el LocalStorage
    localStorage.setItem('users', jsonData);
  }
}
