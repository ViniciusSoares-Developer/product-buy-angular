import { Component } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { Provider } from 'src/app/interfaces/provider';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public edit: { provider: boolean; product: boolean} = { provider: false, product: false};
  public id: { provider: number | null, product: number | null } = { provider: null, product: null};
  public product: Product = {
    name: '',
    provider: -1,
    price: 0,
    type: '',
    description: '',
    amount: 0,
    phone: '',
    date: ''
  };
  public provider: Provider = {
    name: '',
    state: '',
    city: '',
    district: '',
    address: '',
  };

  public products: Array<Product> = JSON.parse(localStorage.getItem('products') || '[]');
  public providers: Array<Provider> = JSON.parse(localStorage.getItem('providers') || '[]');

  public setProduct(event: any): void {
    this.products.push(event);
    localStorage.setItem('products', JSON.stringify(this.products));
    this.resetForm('product');
  }
  public setProvider(event: any): void {
    this.providers.push(event);
    localStorage.setItem('providers', JSON.stringify(this.providers));
    this.resetForm('provider')
  }
  public deleteProduct(index: number): void{
      this.products.splice(index, 1);
      localStorage.setItem('products', JSON.stringify(this.products));
      this.updateLists();
  }
  public deleteProvider(index: number): void{
    if(window.confirm("Deseja apagar esse provedor e todos os produtos relacionados?")){
      this.providers.splice(index, 1);
      this.products.forEach( (item) => {
        if(item.provider == index) {
          this.deleteProduct(this.products.indexOf(item));
        }
      })
      localStorage.setItem('providers', JSON.stringify(this.providers));
    }
    this.updateLists()
  }
  public editProduct(action: string, index: number): void {
    if(action === 'edit'){
      this.product = this.products[index]
      this.id.product = index;
      this.edit.product = true;
    }
    else if(action === 'confirm' && this.id.product != null){
      this.products[this.id.product] = this.product
      localStorage.setItem('products', JSON.stringify(this.products));
      this.edit.product = false;
      this.id.product = null
      this.resetForm('product');
    }
  }
  public editProvider(action: string, index: number): void {
    if(action === 'edit'){
      this.provider = this.providers[index]
      this.id.provider = index;
      this.edit.provider = true;
    }
    if(action === 'confirm' && this.id.provider != null){
      this.providers[this.id.provider] = this.provider
      localStorage.setItem('providers', JSON.stringify(this.providers));
      this.edit.provider = false;
      this.id.provider = null;
      this.resetForm('provider');
    }
  }
  public resetForm(type: string):void {
    if(type == 'provider'){
      this.provider = {
        name: '',
        state: '',
        city: '',
        district: '',
        address: '',
      }
    }else if(type == 'product'){
      this.product = {
        name: '',
        provider: -1,
        price: 0,
        type: '',
        description: '',
        amount: 0,
        phone: '',
        date: ''
      }
    }
    this.updateLists()
  }
  public updateLists(): void {
    this.products = JSON.parse(localStorage.getItem('products') || '[]');
    this.providers = JSON.parse(localStorage.getItem('providers') || '[]');
  }
}
