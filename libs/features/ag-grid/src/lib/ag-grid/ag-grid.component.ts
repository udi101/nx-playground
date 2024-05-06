import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';
import { ColDef, RowClickedEvent } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';

@Component({
  selector: 'lib-ag-grid',
  standalone: true,
  imports: [CommonModule, AgGridModule],
  templateUrl: './ag-grid.component.html',
  styleUrl: './ag-grid.component.scss'
})
export class AgGridComponent {

  columnDefs: ColDef[] = [
    { headerName: 'First Name', field: 'firstName' },
    { headerName: 'Last Name', field: 'lastName' },
    { headerName: 'Make', field: 'make', valueGetter: (c) => c.data.make + ' inc.' },
    { headerName: 'Model', field: 'model' },
    { headerName: 'Price', field: 'price', valueFormatter: p => p.value.toLocaleString() + '$' }
  ];

  rowData = [
    { firstName: 'Udi', lastName: 'Mazor', make: 'Toyota', model: 'Celica', price: 35000 },
    { firstName: 'Avigail', lastName: 'Mazor', make: 'Ford', model: 'Mondeo', price: 32000 },
    { firstName: 'Yulia', lastName: 'Haviv', make: 'Porsche', model: 'Boxster', price: 72000 }
  ];

  rowClicked(e: RowClickedEvent) {
    console.log('This row was selected', e.data.firstName);
  }
}
