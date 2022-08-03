import { Component, DoCheck, ViewChild } from '@angular/core';
import { Produto } from 'src/app/interfaces/produto';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.scss'],
})
export class CadastroProdutoComponent implements DoCheck {
  @ViewChild("form") form: any;

  public list: Array<Produto> = JSON.parse(
    localStorage.getItem('list') || '[]'
  );
  public types: Array<string> = [
    'Entrada',
    'Saida',
    'Quantidade'
  ]
  public item: Produto = {
    nome: '',
    preco: 0,
    tipo: '',
    descricao: '',
    quantidade: 0,
    telefone: '',
    data: ''
  };
  public edit: boolean = false;
  public id: number = -1;

  constructor() {}
  
  ngDoCheck(): void {
    this.list = JSON.parse(localStorage.getItem('list') || '[]');
    this.list = this.list.sort((a, b) => {
      return a.quantidade - b.quantidade;
    });
  }
  public addProduct(form: Produto): void {
      if(this.form.valid){
        this.list.push(form);
        localStorage.setItem('list', JSON.stringify(this.list));
        this.clearForm();
      }else{
        window.alert("digite")
      }
  }
  
  public deleteProduct(index: number): void {
    this.list.splice(index, 1);
    localStorage.setItem('list', JSON.stringify(this.list));
  }
  
  public editProduct(event:string, index: number): void {
    if(event == 'editar'){
      this.item.nome = this.list[index].nome;
      this.item.tipo = this.list[index].tipo;
      this.item.preco = this.list[index].preco;
      this.item.quantidade = this.list[index].quantidade;
      this.item.descricao = this.list[index].descricao;
      this.item.telefone = this.list[index].telefone;
      this.item.data = this.list[index].data;
      this.id = index;
      this.edit = true;
    }else if(event == 'confirmar' && this.id > -1){
      this.list[this.id] = this.form.value;
      localStorage.setItem('list', JSON.stringify(this.list));
      this.edit = false;
      this.clearForm();
    }
  }

  public clearForm(): void {
    this.form.reset();
  }
}
