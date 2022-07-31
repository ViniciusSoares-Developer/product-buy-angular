import { Component, DoCheck, OnInit } from '@angular/core';
import { Produto } from '../../interfaces/produto';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.scss'],
})
export class CadastroProdutoComponent implements OnInit, DoCheck {
  public list: Array<Produto> = JSON.parse(
    localStorage.getItem('list') || '[]'
  );

  public produto: Produto = {
    nome: '',
    preco: 0,
    tipo: '',
    descricao: '',
    quantidade: 0,
    telefone: '',
    data: '',
  };

  constructor() {}
  ngDoCheck(): void {
    this.list = JSON.parse(localStorage.getItem('list') || '[]');
    this.list.sort( (a, b) => { return b.quantidade - a.quantidade; });
  }

  ngOnInit(): void {}


  public addProduct(): void {
    this.list.push(this.produto);
    localStorage.setItem('list', JSON.stringify(this.list));
  }
  
  public sellProduct(index: number): void {
    this.list[index].quantidade -= 1;
    localStorage.setItem('list', JSON.stringify(this.list));
  }

  public sortList(event: string) {
    if( event == "tipo"){
      this.list = this.list.sort( (a, b) => {return a.nome.localeCompare(b.nome)});
    }
    if( event == "nome"){
      this.list = this.list.sort( (a, b) => {return a.nome.localeCompare(b.nome)});
    }
    if( event == "preco"){
      this.list = this.list.sort( (a, b) => {return a.preco - b.preco});
    }
    if( event == "descricao"){
      this.list = this.list.sort( (a, b) => {return a.descricao.localeCompare(b.descricao)});
    }
    if( event == "quantidade"){
      this.list = this.list.sort( (a, b) => {return a.quantidade - b.quantidade});
    }
    if( event == "telefone"){
      this.list = this.list.sort( (a, b) => {return a.telefone.localeCompare(b.telefone)});
    }
    if( event == "data"){
      this.list = this.list.sort( (a, b) => {return a.data.localeCompare(b.data)});
    }
  }
}
