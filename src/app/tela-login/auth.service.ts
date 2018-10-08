import { Injectable } from '@angular/core';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private usuarioAutenticado = false;
  constructor() {
   }

  fazerLogin(usuario: Usuario) {
    if (usuario.nome === 'admin' && usuario.senha === 'admin') {
      this.usuarioAutenticado = true;
      window.location.href = '/home';
      return true;
    } else {
      this.usuarioAutenticado = false;
      return false;
    }
  }
}
