import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { Provider } from 'src/app/interfaces/provider';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
})
export class FormProductComponent {
  @ViewChild('formProduct') formProduct: any;
  @Output() productEmiter: EventEmitter<any> = new EventEmitter;

  @Input() product!: Product;
  public types: Array<string> = ['Entrada', 'Saida', 'Quantidade'];
  @Input() providers: Array<Provider> = [];
  @Input() edit: boolean = false;

  public sendData(item: Product):void {
    if(this.formProduct.valid){
      this.productEmiter.emit(item);
    }
    else {
      window.alert("Necessario preencher todo o formulario.\nSe estiver sem provedor, adicione antes de colocar o produto.");
    }
  }
}