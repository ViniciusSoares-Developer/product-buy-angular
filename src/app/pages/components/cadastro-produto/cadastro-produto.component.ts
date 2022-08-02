import { Component, DoCheck } from '@angular/core';
import { Produto } from 'src/app/interfaces/produto';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.scss'],
})
export class CadastroProdutoComponent implements DoCheck {

  public entrada: number = Number(localStorage.getItem('entrada') || '0');
  public saida: number = Number(localStorage.getItem('saida') || '0');
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
  public types: Array<string> = [
    'Comida',
    'Acessorio',
    'Roupa',
    'Banho',
    'Utencilio',
    'Eletronico',
    'Produto de beleza',
    'Artigos de decoração'
  ]

  constructor() {}
  ngDoCheck(): void {
    this.list = JSON.parse(localStorage.getItem('list') || '[]');
    this.entrada = Number(localStorage.getItem('entrada') || '0');
    this.saida = Number(localStorage.getItem('saida') || '0');
    this.list = this.list.sort((a, b) => {
      return b.quantidade - a.quantidade;
    });
  }
  public addProduct(): void {
    if(
      this.produto.data &&
      this.produto.descricao &&
      this.produto.preco &&
      this.produto.nome &&
      this.produto.telefone &&
      this.produto.quantidade &&
      this.produto.tipo
    ){
      this.list.push(this.produto);
      localStorage.setItem('list', JSON.stringify(this.list));
      localStorage.setItem('entrada', String(this.entrada+1));
      this.produto.data = ''
      this.produto.descricao = ''
      this.produto.preco = 0
      this.produto.nome = ''
      this.produto.telefone = ''
      this.produto.quantidade = 0
      this.produto.tipo = ''
    }
    else{
      window.alert('Digite todos os valores para poder salvar')
    }
  }
  
  public sellProduct(index: number): void {
    this.list[index].quantidade -= 1;
    localStorage.setItem('list', JSON.stringify(this.list));
    localStorage.setItem('saida', String(this.saida+1));
  }
}
