import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { Produto } from 'src/app/interfaces/produto';

@Component({
  selector: 'app-pie-charts',
  templateUrl: './pie-charts.component.html',
  styleUrls: ['./pie-charts.component.scss']
})
export class PieChartsComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  private saida: number = 0;
  private entrada: number = 0;
  private quantidade: number = 0;

  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: false,
  };
  public pieChartLabels = [ 'Entrada', 'Saida', 'Quantidade' ];
  public pieChartDatasets = [ {
    data: [0]
  } ];
  public pieChartLegend = true;
  public pieChartPlugins = [];

  ngOnInit(): void {
    setInterval(() => { this.update(); }, 500);
  }
  
  public update(): void {
    this.dataRequest();
    this.pieChartDatasets[0].data = [this.entrada, this.saida, this.quantidade];
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
