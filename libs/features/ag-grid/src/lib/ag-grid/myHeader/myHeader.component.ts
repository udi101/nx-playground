import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IHeaderAngularComp } from 'ag-grid-angular';
import { IHeaderParams } from 'ag-grid-community';

@Component({
  selector: 'lib-my-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './myHeader.component.html',
  styleUrl: './myHeader.component.scss'
})
export class MyHeaderComponent implements IHeaderAngularComp {
  header = '';

  agInit(params: IHeaderParams): void {
    this.header = params.displayName;
  }

  refresh(params: IHeaderParams): boolean {
    return false;
  }
}
