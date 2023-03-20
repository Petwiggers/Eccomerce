import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidarUsuarioService {
  apiUrl: string ='http://localhost:3000/Usuarios';
  arrayUsuarios!: any;
  constructor(private http : HttpClient) {}

  verificarUsuario(usuarioLogin:{}){
    this.http.get(this.apiUrl)
    .subscribe(usuarios => {
      this.arrayUsuarios = usuarios;
      console.log(typeof(this.arrayUsuarios));
      console.log(this.arrayUsuarios);
      
      
      
      // this.arrayUsuarios.forEach((item: any) => {
      //   if (item === usuarioLogin) {
      //     return true;
      //   }
      // });
    });
    
  }
}
