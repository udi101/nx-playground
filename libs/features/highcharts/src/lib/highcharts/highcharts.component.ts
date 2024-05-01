import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-highcharts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './highcharts.component.html',
  styleUrl: './highcharts.component.scss',
})
export class HighchartsComponent {}
