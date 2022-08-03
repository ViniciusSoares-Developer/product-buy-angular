import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { Produto } from 'src/app/interfaces/produto';


@Component({
  selector: 'app-chart-cadastro',
  templateUrl: './chart-cadastro.component.html',
  styleUrls: ['./chart-cadastro.component.scss']
})
export class ChartCadastroComponent implements OnInit{
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  private saida: number = 0;
  private entrada: number = 0;
  private quantidade: number = 0;

  public barChartLegend = false;
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: ['Entrada', 'Saída', 'Quantidade'],
    datasets: [
      { data: [],
        hoverBackgroundColor: 'rgba(0,140,0,0.3)',
        backgroundColor: 'rgba(0,140,0,0.6)',
        borderWidth: 2,
        borderColor: 'rgba(0,140,0,0.6)',
        hoverBorderColor: 'yellow',
      }]
  };

  public barChartOptions: ChartOptions = {
    responsive: false,
  };

  ngOnInit(): void {
    setInterval(() => { this.update(); }, 500);
  }
  
  public update(): void {
    this.dataRequest();
    this.barChartData.datasets[0].data = [this.entrada, this.saida, this.quantidade];
    this.chart?.update();
  } 

  public dataRequest(): void {
    this.entrada = 0;
    this.saida = 0;
    this.quantidade = 0;
    const list = JSON.parse(localStorage.getItem('list') || '[]')
    list.forEach( (item: Produto) => {
      if(item.tipo == 'Entrada'){
        this.entrada += 1
      }else if(item.tipo == 'Saida'){
        this.saida += 1
      }
      this.quantidade += item.quantidade;
    } )
  }
}