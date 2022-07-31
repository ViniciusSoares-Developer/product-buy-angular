import { Component } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-chart-cadastro',
  templateUrl: './chart-cadastro.component.html',
  styleUrls: ['./chart-cadastro.component.scss']
})
export class ChartCadastroComponent {
  public barChartLegend = false;
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    datasets: [
      { data: [ 100], hoverBackgroundColor: 'white'},
    ],
  };

  public barChartLabels: Label[] = [];

  public barChartOptions: ChartOptions = {
    responsive: true,
    backgroundColor: 'green',
    
  };

  
}