import { Component, ViewChild } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexStroke, ApexXAxis, ChartComponent } from 'ng-apexcharts';

@Component({
  selector: 'app-provider-graphics',
  templateUrl: './provider-graphics.component.html',
})
export class ProviderGraphicsComponent {
  @ViewChild('apxChart') apxChart: ChartComponent | undefined;

  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;

  constructor() {
    this.series = [
      {
        name: '',
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    ]
    this.chart = {
      type: 'area'
    }
    this.xaxis = {
      type: 'category',
      categories: [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro"
      ]
    }
    this.stroke = {
      curve: "smooth"
    }
    this.dataLabels = {
      enabled: true
    }
    this.update()
  }

  public update():void {
    this.apxChart?.updateSeries(this.recoveredData(), true)
    setInterval(()=>{this.apxChart?.updateSeries(this.recoveredData(), true)}, 10000)
  }

  public recoveredData(): ApexAxisChartSeries {
    var provider = JSON.parse(localStorage.getItem('providers') || '[]');
    var products = JSON.parse(localStorage.getItem('products') || '[]');
    var series: ApexAxisChartSeries = [];
    provider.forEach((item: any) => {
      series.push({
        name: item.name,
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      })
    });
    products.forEach((item: any) => {
      series[item.provider].data[Number(item.date.slice(5,7))-1] += item.amount
    })
    return series;
  }

}