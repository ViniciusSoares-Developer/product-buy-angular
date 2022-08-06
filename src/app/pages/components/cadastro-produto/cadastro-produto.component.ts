import { Component, DoCheck, ViewChild } from '@angular/core';
import { Produto } from 'src/app/interfaces/produto';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.scss'],
})
export class CadastroProdutoComponent implements DoCheck {
  @ViewChild('form') form: any;
  @ViewChild('formFornecedor') formFornecedor: any;

  public list: Array<Produto> = JSON.parse(
    localStorage.getItem('list') || '[]'
  );
  public types: Array<string> = ['Entrada', 'Saida', 'Quantidade'];
  public estates: Array<{UF: string, nome: string}> = [
    { UF: 'AC', nome: 'Acre' },
    { UF: 'AL', nome: 'Alagoas' },
    { UF: 'AP', nome: 'Amapá' },
    { UF: 'AM', nome: 'Amazonas' },
    { UF: 'BA', nome: 'Bahia' },
    { UF: 'CE', nome: 'Ceará' },
    { UF: 'DF', nome: 'Distrito Federal' },
    { UF: 'ES', nome: 'Espírito Santo' },
    { UF: 'GO', nome: 'Goías' },
    { UF: 'MA', nome: 'Maranhão' },
    { UF: 'MT', nome: 'Mato Grosso' },
    { UF: 'MS', nome: 'Mato Grosso do Sul' },
    { UF: 'MG', nome: 'Minas Gerais' },
    { UF: 'PA', nome: 'Pará' },
    { UF: 'PB', nome: 'Paraíba' },
    { UF: 'PR', nome: 'Paraná' },
    { UF: 'PE', nome: 'Pernambuco' },
    { UF: 'PI', nome: 'Piauí' },
    { UF: 'RJ', nome: 'Rio de Janeiro' },
    { UF: 'RN', nome: 'Rio Grande do Norte' },
    { UF: 'RS', nome: 'Rio Grande do Sul' },
    { UF: 'RO', nome: 'Rondônia' },
    { UF: 'RR', nome: 'Roraíma' },
    { UF: 'SC', nome: 'Santa Catarina' },
    { UF: 'SP', nome: 'São Paulo' },
    { UF: 'SE', nome: 'Sergipe' },
    { UF: 'TO', nome: 'Tocantins' },
  ];
  public item: Produto = {
    nome: '',
    nome_fornecedor: '',
    endereco: {
      uf: '',
      cidade: '',
      bairro: '',
      endereco: ''
    },
    preco: 0,
    tipo: '',
    descricao: '',
    quantidade: 0,
    telefone: '',
    data: '',
  };
  public edit: boolean = false;
  public id: number = -1;
  public endereco: string = '';

  constructor() {}

  ngDoCheck(): void {
    this.list = JSON.parse(localStorage.getItem('list') || '[]');
    this.list = this.list.sort((a, b) => {
      return a.quantidade - b.quantidade;
    });
  }
  public addProduct(): void {
    if (this.form.valid && this.formFornecedor.valid) {
      this.list.push(this.item);
      localStorage.setItem('list', JSON.stringify(this.list));
      this.clearForm();
    } else {
      window.alert('digite');
    }
  }

  public deleteProduct(index: number): void {
    this.list.splice(index, 1);
    localStorage.setItem('list', JSON.stringify(this.list));
  }

  public editProduct(event: string, index: number): void {
    if (event == 'editar') {
      this.item.nome = this.list[index].nome;
      this.item.tipo = this.list[index].tipo;
      this.item.preco = this.list[index].preco;
      this.item.quantidade = this.list[index].quantidade;
      this.item.descricao = this.list[index].descricao;
      this.item.telefone = this.list[index].telefone;
      this.item.data = this.list[index].data;
      this.item.nome_fornecedor = this.list[index].nome_fornecedor;
      this.item.endereco.uf = this.list[index].endereco.uf;
      this.item.endereco.cidade = this.list[index].endereco.cidade;
      this.item.endereco.bairro = this.list[index].endereco.bairro;
      this.item.endereco.endereco = this.list[index].endereco.endereco;
      this.id = index;
      this.edit = true;
    } else if (event == 'confirmar' && this.id > -1) {
      this.list[this.id] = this.item;
      localStorage.setItem('list', JSON.stringify(this.list));
      this.edit = false;
      this.clearForm();
    }
  }

  public clearForm(): void {
    this.form.reset();
    this.formFornecedor.reset();
  }
}
