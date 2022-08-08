import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import { Provider } from 'src/app/interfaces/provider';

@Component({
  selector: 'app-form-provider',
  templateUrl: './form-provider.component.html',
})
export class FormProviderComponent implements OnInit {
  @ViewChild('formProvider') formProvider: any;

  @Output() providerEmiter: EventEmitter<Provider> = new EventEmitter();

  @Input() provider!: Provider;
  public estates: Array<{ UF: string; nome: string }> = [
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
  @Input() edit: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  public sendData(item: Provider): void {
    if(this.formProvider.valid){
      this.providerEmiter.emit(item);
    }
    else window.alert("Preencha o formulario para salvar")
  }
}
