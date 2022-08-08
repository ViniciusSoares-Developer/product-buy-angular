import { Component, ViewChild } from '@angular/core';
import { ApexChart, ApexNonAxisChartSeries, ApexPlotOptions, ChartComponent } from 'ng-apexcharts';

@Component({
  selector: 'app-amount-graphic',
  templateUrl: './amount-graphic.component.html'
})
export class AmountGraphicComponent {
  @ViewChild('apxChart') apxChart: ChartComponent | undefined;

  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  plotOptions: ApexPlotOptions;
  labels: Array<string>;

  constructor() {
    this.series = []
    this.chart = {
      type: 'donut'
    }
    this.labels = ['Entrada', 'Saida', 'Armazenada']
    this.plotOptions = {
      pie: {
        dataLabels: {
          offset: 0,
          minAngleToShowLabel: 90
        }
      }
    }
    this.update()
  }

  public update(): void {
    this.apxChart?.updateSeries(this.recoveredData(), true)
    setInterval(()=>{this.apxChart?.updateSeries(this.recoveredData(), false)}, 1000)
  }

  public recoveredData(): ApexNonAxisChartSeries {
    var product = JSON.parse(localStorage.getItem('products') || '[]');
    var input = 0
    var output = 0
    var amount = 0
    product.forEach((item: any) => {
      if(item.type == "Entrada") {
        input += item.amount;
      }
      else if(item.type == "Saida"){
        output += item.amount;
      }
      else if(item.type == "Quantidade"){
        amount += item.amount;
      }
    });
    return [input, output, amount]
  }
}
