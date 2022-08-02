import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';


@Component({
  selector: 'app-chart-cadastro',
  templateUrl: './chart-cadastro.component.html',
  styleUrls: ['./chart-cadastro.component.scss']
})
export class ChartCadastroComponent implements OnInit{
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  @Input() saida?: number;
  @Input() entrada?: number;

  public barChartLegend = false;
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: ['Entrada', 'Saída'],
    datasets: [
      { data: [this.entrada || 0, this.saida || 0],
        hoverBackgroundColor: 'rgba(0,140,0,0.3)',
        backgroundColor: 'rgba(0,140,0,0.6)',
        borderWidth: 2,
        borderColor: 'rgba(0,140,0,0.6)',
        hoverBorderColor: 'yellow',
      }]
  };

  public barChartOptions: ChartOptions = {
    responsive: true,
  };

  ngOnInit(): void {
    this.barChartData.datasets[0].data = [this.entrada || 0, this.saida || 0];
    setInterval(() => { this.update(); }, 1000);
  }
  
  public update(): void {
    this.barChartData.datasets[0].data = [this.entrada || 0, this.saida || 0];
    this.chart?.update();
  } 
}