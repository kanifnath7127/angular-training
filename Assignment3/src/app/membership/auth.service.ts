import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  status: boolean = false;

  validate(user: string, password: string): boolean {
    if (user === 'kanif@example.com' && password === 'seed') {
      return true;
    } else {
      return false;
    }
  }

  logout(): any {}
  getUser(): any {}
  isLoggedIn(): boolean {
    return false;
  }
}
