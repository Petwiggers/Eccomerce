import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InformacoesDeLogin } from 'src/app/modelos/informacoes-de-login';
import { PipeNomeUsuarioPipe } from 'src/app/servicos/pipe-nome-usuario.pipe';
import { ValidarUsuarioService } from 'src/app/servicos/validar-usuario.service';

@Component({
  selector: 'app-formulario-login',
  templateUrl: './formulario-login.component.html',
  styleUrls: ['./formulario-login.component.scss']
})

export class FormularioLoginComponent implements OnInit {
  formUsuario!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private getUsuario:ValidarUsuarioService,
    private routers: Router,
    private pipe: PipeNomeUsuarioPipe){}

  ngOnInit() {
    this.criaFormulario(new InformacoesDeLogin());
  }

  criaFormulario(cliente: InformacoesDeLogin){
    this.formUsuario = this.formBuilder.group({
      email:[cliente.email,[Validators.required,Validators.email, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$")]],
      senha:[cliente.senha,[Validators.required,Validators.minLength(6),Validators.pattern("[0-9]+$")]]
    });
  }

  OnSubmit(){
    if(!this.formUsuario.valid){
      alert('Email ou Senha Incorretos!');
      return;
    }
    this.verificarusuario();
    this.irParaHome();
    let nomeUsuario = this.pegarNomeUsuario(this.formUsuario.value.email);
    this.realizarLoginUsuario(nomeUsuario);
    this.resetarFormulario();
  }
  
  verificarusuario(){
    this.getUsuario.verificarUsuario(this.formUsuario.value);
  }
  
  irParaHome(): void{
    this.routers.navigate(['/home']);
  }
  
  resetarFormulario(){
    this.criaFormulario(new InformacoesDeLogin());
  }

  realizarLoginUsuario(nomeUsuario: string){
    localStorage.setItem('logado','true');
    localStorage.setItem('NomeUsuario',nomeUsuario);
  }

  pegarNomeUsuario(email:string){
    return this.pipe.transform(email);
  }
  teste(){
    const nomeUsuario = this.pegarNomeUsuario(this.formUsuario.value.email);
    console.log(nomeUsuario);
    // console.log(this.formUsuario.value.email);
  }
}
