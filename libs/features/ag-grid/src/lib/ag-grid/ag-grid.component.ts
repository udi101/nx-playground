import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';
import { ColDef, ICellRendererParams, RowClickedEvent } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import 'ag-grid-enterprise';
import { MyCellComponent, MyCellParams } from './myCell/myCell.component';
import { LicenseManager } from 'ag-grid-enterprise';
import { Store } from '@ngxs/store';
import { GetOwners } from '../state/ag-grid-actions';
import { Owner } from '../state/ag-grid.state';
import { Observable } from 'rxjs';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import { RowClassParams } from 'ag-grid-community/dist/types/core/entities/gridOptions';


@Component({
  selector: 'lib-ag-grid',
  standalone: true,
  imports: [CommonModule, AgGridModule],
  templateUrl: './ag-grid.component.html',
  styleUrl: './ag-grid.component.scss'
})
export class AgGridComponent implements OnInit {
  owners$: Observable<Owner[]> = new Observable<Owner[]>();

  constructor(private store: Store) {
    LicenseManager.setLicenseKey(
      'CompanyName=CORALOGIX LTD,LicensedApplication=Coralogix,LicenseType=SingleApplication,LicensedConcurrentDeveloperCount=1,LicensedProductionInstancesCount=1,AssetReference=AG-031512,SupportServicesEnd=30_September_2023_[v2]_MTY5NjAyODQwMDAwMA==dcb0e88900ddef3ea12ee0e52f8d56f2'
    );
    this.owners$ = this.store.select<Owner[]>((state) => state.agGridState.owners);
  }


  ngOnInit(): void {
    this.getAllOwners();
  }


  pagination = true;
  pageSize = 10;
  paginationPageSizeSelector = [5, 10];
  rowClassRules = { 'expensive': (row: RowClassParams<Owner>) => (row.data?.price || 0) > 100000 };

  components = {
    myCell: MyCellComponent
  };


  columnDefs: ColDef[] = [
    {
      headerName: 'First Name', field: 'firstName', cellRenderer: (params: ICellRendererParams) => {
        return `<div> I - ${params.value}</div>`;
      }
    },
    {
      headerName: 'Last Name',
      field: 'lastName'
      // headerComponent: MyHeaderComponent,
    },
    { headerName: 'Make', field: 'make', valueGetter: (c) => c.data.make + ' inc.' },
    {
      headerName: 'Model',
      field: 'model',
      cellRenderer: 'myCell',
      cellRendererParams: { buttonText: 'Display Model' } as MyCellParams
      // cellRendererSelector: (params: ICellRendererParams) => {
      //   return { component: MyCellComponent, params: { buttonText: 'Show Model' } as MyCellParams };
      // }
      // cellRenderer: MyCellComponent,
      // cellRendererParams: { buttonText: 'Show Model!' } as MyCellParams
    },
    {
      headerName: 'Price', field: 'price', valueFormatter: p => p.value.toLocaleString() + '$',
      cellClassRules: { 'expensive': params => params.value > 100_000 }  // This is row style by condition
    }
  ];

  defaultColDef: ColDef = {
    enableRowGroup: true,
    flex: 1,
    minWidth: 100
  };

  rowClicked(e: RowClickedEvent) {
    console.log('This row was selected', e.data);
  }

  // This is a function that dispatches an action
  @Dispatch() getAllOwners = () => new GetOwners();
}
