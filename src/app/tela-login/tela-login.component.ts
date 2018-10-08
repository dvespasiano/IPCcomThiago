import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Usuario } from './usuario';

@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.css']
})
export class TelaLoginComponent implements OnInit {
  public usuario: Usuario = new Usuario();
  senhaErrada = true;
  constructor(private authService: AuthService) { }
  ngOnInit() {
    this.usuario.nome = '';
    this.usuario.senha = '';
  }

  errouSenha() {
    this.senhaErrada = true;
  }
  fazerLogin() {
    if (this.authService.fazerLogin(this.usuario)) {
      this.usuario.nome = '';
      this.usuario.senha = '';
    } else {
      this.errouSenha();
    }
  }

}
