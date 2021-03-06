import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  tokenName = 'carasante_token';
  mailName = 'carasante_mail';

  constructor() { }

  setToken(token: string): void {
    localStorage.setItem(this.tokenName, token);
  }

  getToken(): string {
    return localStorage.getItem(this.tokenName);
  }

  removeToken(): void {
    localStorage.removeItem(this.tokenName);
  }

  setMail(mail: string): void {
    localStorage.setItem(this.mailName, mail);
  }

  getMail(): string {
    return localStorage.getItem(this.mailName);
  }
}
