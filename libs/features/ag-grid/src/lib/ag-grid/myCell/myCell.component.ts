import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'lib-my-cell',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './myCell.component.html',
  styleUrl: './myCell.component.scss'
})
export class MyCellComponent implements ICellRendererAngularComp {

  value: string = '';

  onValueClick() {
    alert(`The value is: ${this.value}`);
  }

  agInit(params: ICellRendererParams): void {
    this.value = params.value + 'eee';
    console.log({ params });
  }

  refresh(params: ICellRendererParams<any>): boolean {
    return false;
  }
}
