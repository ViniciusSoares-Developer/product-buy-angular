import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <app-home></app-home>
    <!-- <app-input-output-graphic></app-input-output-graphic> -->
    <!-- <app-amount-graphic></app-amount-graphic> -->
    <!-- <app-provider-graphics></app-provider-graphics> -->
    `
})
export class AppComponent {
  title = 'cadastroProduto';
}
