import { Component, ViewChild } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexPlotOptions, ApexStroke, ApexXAxis, ChartComponent } from 'ng-apexcharts';


@Component({
  selector: 'app-input-output-graphic',
  templateUrl: './input-output-graphic.component.html',
})
export class InputOutputGraphicComponent {
  @ViewChild('apxChart') apxChart: ChartComponent | undefined;
  
  series: ApexAxisChartSeries;
  chart: ApexChart;
  stroke: ApexStroke;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;

  constructor() {
    this.series = [
      {
        name: "Tipo",
        type: 'bar',
        data: []
      },
      {
        name: 'Quantidade',
        type: 'bar',
        data: [],
      }
    ];
    this.chart = {
      type: 'bar',
    }
    this.stroke = {
      show: true,
      width: 1,
    }
    this.plotOptions = {
      bar: {
        horizontal: false,
        dataLabels: {
          position: "top"
        }
      }
    }
    this.xaxis = {
      categories: ["Entrada", "Saida"],
    }
    this.update();
  }

  public update(): void {
    this.apxChart?.updateSeries(this.recoveredData(), true)
    setInterval(()=>{this.apxChart?.updateSeries(this.recoveredData(), true)}, 1000)
  }

  public recoveredData(): ApexAxisChartSeries {
    var product = JSON.parse(localStorage.getItem('products') || '[]');
    var input = { thisAmount: 0, amount: 0}
    var output = { thisAmount: 0, amount: 0}
    var series: ApexAxisChartSeries = [];
    product.forEach((item: any) => {
      if(item.type == "Entrada") {
        input.thisAmount += 1;
        input.amount += item.amount;
      }
      if(item.type == "Saida"){
        output.thisAmount += 1;
        output.amount += item.amount;
      }
    });
    return [
      {
        name: "Tipo",
        type: 'bar',
        data: [input.thisAmount, output.thisAmount]
      },
      {
        name: 'Quantidade',
        type: 'bar',
        data: [input.amount, output.amount],
      }
    ];
  }
}
