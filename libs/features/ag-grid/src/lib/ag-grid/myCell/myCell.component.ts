import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { ButtonComponent } from '@nx-playground/ui';

export interface MyCellParams {
  buttonText: string;
}

@Component({
  selector: 'lib-my-cell',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './myCell.component.html',
  styleUrl: './myCell.component.scss'
})
export class MyCellComponent implements ICellRendererAngularComp {

  value = '';
  buttonText = '';

  onValueClick() {
    alert(`The value is: ${this.value}`);
  }


  agInit(params: ICellRendererParams & MyCellParams): void {
    this.buttonText = params.buttonText;
    this.value = params.value + '!';
  }

  refresh(params: ICellRendererParams<MyCellParams>): boolean {
    console.log(params.data?.buttonText);
    return false;
  }
}
