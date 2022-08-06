import { Endereco } from "./endereco";

export interface Produto {
    nome: string;
    nome_fornecedor: string;
    endereco: Endereco;
    preco: number;
    tipo: string;
    descricao: string;
    quantidade: number;
    telefone: string;
    data: string;
}
