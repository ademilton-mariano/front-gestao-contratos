import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutenticadorService } from '../services/autenticador.service';
import { RequisicoesService } from '../services/requisicoes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent {

  constructor(
    private router: Router,
    private requisicoes: RequisicoesService<any>,
    public formBuilder: FormBuilder,
    public autenticadorService: AutenticadorService
  ) { }

  formularioLogin: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.formularioLogin = this.formBuilder.group({
      dataLogin: [new Date(), [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required]],
    });
  }

  get dadosFormulario() {
    return this.formularioLogin.controls;
  }

  Login() {
    const dadosFormulario = {
      dataLogin: this.dadosFormulario['dataLogin'].value,
      email: this.dadosFormulario['email'].value,
      senha: this.dadosFormulario['senha'].value,
    };

    this.requisicoes.criar(`login`, dadosFormulario).subscribe(
      (resposta) => {
        this.autenticadorService.setToken(resposta.token);
        this.autenticadorService.setUsuario(
          this.dadosFormulario['email']?.value,
          resposta.usuarioId
        );
        this.autenticadorService.UsuarioAutenticado(true);
        this.router.navigate(['/pagina-inicial']);
      },
      (error) => {
        console.error('Erro no login', error);
      }
    );
  }

}
