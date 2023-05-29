import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class UserStorageService {
  private usersUrl = 'assets/users.json';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.usersUrl);
  }

  getUserByEmail(email: string): Observable<any> {
    return this.http.get<any[]>(this.usersUrl).pipe(
      map(users => users.find(user => user.email === email))
    );
  }
}
