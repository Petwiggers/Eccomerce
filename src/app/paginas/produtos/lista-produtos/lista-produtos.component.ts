import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.scss']
})
export class ListaProdutosComponent {
  produtos: any[] = [
  {
    id:1,
    nome: 'Calça',
    quantidade: 10,
    preco: '42,99'
  },
  {
    id:2,
    nome: 'Camisa',
    quantidade: 25,
    preco: '29,99'
  },
  {
    id:3,
    nome: 'Tênis de Corrida',
    quantidade: 7,
    preco: '105,99'
  },
  {
    id:4,
    nome: 'Shorts',
    quantidade: 23,
    preco: '50,99'
  },
  {
    id:5,
    nome: 'Par de Meias',
    quantidade: 11,
    preco: '11,99'
  }
];
}
