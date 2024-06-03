import { Component, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
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
export class HighchartsComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;

  // @ViewChild('blankContainer', { static: true, read: ViewContainerRef }) emptyTemplate: TemplateRef<never>;
  @ViewChild('placeHolder', { static: true, read: ViewContainerRef }) placeHolder: ViewContainerRef;
  @ViewChild('noImage', { static: true, read: TemplateRef }) noImage: TemplateRef<never>;
  animal = 'dog';
  chartOptions: Highcharts.Options = {
    chart: {
      type: 'line',
      marginLeft: 100,
      events: {
        click: function() {
          console.log(this);
        }
      }
    },
    title: {
      text: 'Line chart'
    },
    yAxis: {
      title: { text: 'Degrees' }, labels: {
        formatter: function() {
          return this.value.toString() + '°';
        },

        style: {
          color: 'black'
        },
        overflow: 'justify'
      }
    },
    series: [
      {
        data: [3, 5, 6, 7, 8, 2, 6, 1, 1, 3, 12, 3, 1, 7, 6, 7],
        type: 'column',
        allowPointSelect: true,
        color: '#2060c0', name: 'Line 2'
      },
      {
        data: [1, 2, 3, 5, 6, 3, 2, 5, 4, 6, 7, 6, 5, 4, 12, 8, 9],
        type: 'line',
        // color: '#608020',
        color: 'red',
        lineWidth: 3,
        name: 'Line 1'
      }
    ]
  };

  ngOnInit() {
    this.placeHolder.createEmbeddedView(this.noImage, { imageName: 'image1' });
  }
}
