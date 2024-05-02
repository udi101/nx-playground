import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'lib-highcharts',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './highcharts.component.html',
  styleUrl: './highcharts.component.scss',
})
export class HighchartsComponent {}
