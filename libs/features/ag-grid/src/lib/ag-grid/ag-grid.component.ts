import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';
import { ColDef, ICellRendererParams, RowClickedEvent } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import 'ag-grid-enterprise';
import { MyCellComponent, MyCellParams } from './myCell/myCell.component';
import { LicenseManager } from 'ag-grid-enterprise';

@Component({
  selector: 'lib-ag-grid',
  standalone: true,
  imports: [CommonModule, AgGridModule],
  templateUrl: './ag-grid.component.html',
  styleUrl: './ag-grid.component.scss'
})
export class AgGridComponent implements OnInit {

  pagination = true;
  pageSize = 5;
  paginationPageSizeSelector = [5, 10];
  rowClassRules = { 'expensive': (row: any) => row.data.price > 100000 };

  ngOnInit() {
    LicenseManager.setLicenseKey(
      'CompanyName=CORALOGIX LTD,LicensedApplication=Coralogix,LicenseType=SingleApplication,LicensedConcurrentDeveloperCount=1,LicensedProductionInstancesCount=1,AssetReference=AG-031512,SupportServicesEnd=30_September_2023_[v2]_MTY5NjAyODQwMDAwMA==dcb0e88900ddef3ea12ee0e52f8d56f2'
    );
  }

  columnDefs: ColDef[] = [
    {
      headerName: 'First Name', field: 'firstName', cellRenderer: (params: ICellRendererParams) => {
        return `<div> I - ${params.value}</div>`;
      }
    },
    { headerName: 'Last Name', field: 'lastName' },
    { headerName: 'Make', field: 'make', valueGetter: (c) => c.data.make + ' inc.' },
    {
      headerName: 'Model',
      field: 'model',
      cellRendererSelector: (params: ICellRendererParams) => {
        return { component: MyCellComponent, params: { buttonText: 'Show Model' } as MyCellParams };
      }
      // cellRenderer: MyCellComponent,
      // cellRendererParams: { buttonText: 'Show Model!' } as MyCellParams
    },
    {
      headerName: 'Price', field: 'price', valueFormatter: p => p.value.toLocaleString() + '$',
      cellClassRules: { 'expensive': params => params.value > 100_000 }  // This is row style by condition
    }
  ];

  rowData = [
    { firstName: 'Udi', lastName: 'Mazor', make: 'Chevrolet', model: 'Orlando', price: 35000 },
    { firstName: 'Avigail', lastName: 'Mazor', make: 'Chevrolet', model: 'Orlando', price: 60000 },
    { firstName: 'Yulia', lastName: 'Haviv', make: 'Porsche', model: 'Crossover', price: 172000 },
    { firstName: 'Emma', lastName: 'Watson', make: 'Subaro', model: 'Forester', price: 72000 },
    { firstName: 'Michal', lastName: 'Tzarfati', make: 'hyundai', model: 'i25', price: 72000 },
    { firstName: 'Gal', lastName: 'Gadot', make: 'Audi', model: 'Q8', price: 92000 },
    { firstName: 'Noa', lastName: 'Tishbi', make: 'BMW', model: 'X8', price: 112000 }
  ];
  defaultColDef: ColDef = {
    enableRowGroup: true,
    flex: 1,
    minWidth: 100
  };

  rowClicked(e: RowClickedEvent) {
    console.log('This row was selected', e.data);
  }
}
