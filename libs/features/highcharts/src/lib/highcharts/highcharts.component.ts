import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HighchartsChartModule } from 'highcharts-angular';
import * as Highcharts from 'highcharts';


@Component({
  selector: 'lib-highcharts',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, HighchartsChartModule],
  templateUrl: './highcharts.component.html',
  styleUrl: './highcharts.component.scss'
})
export class HighchartsComponent {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    chart: {
      type: 'line',
      marginLeft: 100
    },
    title: {
      text: 'Line chart'
    },
    yAxis: {
      title: { text: 'Value' }, labels: {
        formatter: function() {
          return this.value.toString() + '° This is a test';
        },
        style: { width: 100 },
        overflow: 'justify'
      }
    },
    series: [{
      data: [1, 2, 3, 5, 6, 3, 2, 5, 4, 6, 7, 6, 5, 4, 12, 8, 9],
      type: 'line'
    }]
  };
}
