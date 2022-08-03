import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <app-cadastro-produto></app-cadastro-produto>`
})
export class AppComponent {
  title = 'cadastroProduto';
}
