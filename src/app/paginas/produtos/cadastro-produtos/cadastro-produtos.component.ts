import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-produtos',
  templateUrl: './cadastro-produtos.component.html',
  styleUrls: ['./cadastro-produtos.component.scss']
})
export class CadastroProdutosComponent implements OnInit{
  nomeUsuario: string|null = localStorage.getItem('NomeUsuario');
  produtoForm!: FormGroup;
  //@Output() novoProduto: EventEmitter<any> = new EventEmitter;
  
  ngOnInit(): void {
    this.criarFormulario();
  }
 
  criarFormulario(){
    this.produtoForm = new FormGroup ({
      id: new FormControl('',Validators.required),
      nomeProduto: new FormControl('',Validators.required),
      quantidade: new FormControl('',Validators.required),
      preco: new FormControl('',Validators.required),
      nomeUsuario: new FormControl(this.nomeUsuario,Validators.required)
    })
  }
  
  get id(){
    return this.produtoForm.get('id')?.value;
  }
  get nome(){
    return this.produtoForm.get('nomeUsuario')?.value;
  }
  get quantidade(){
    return this.produtoForm.get('quantidade')?.value;
  }
  get preco(){
    return this.produtoForm.get('preco')?.value;
  }
  get nomeProduto(){
    return this.produtoForm.get('nomeProduto')?.value;
  }
  
  onSubmit(){
    console.log(this.id,this.nome,this.nomeProduto,this.nomeUsuario,this.preco,this.quantidade);
    
  }
  
}
