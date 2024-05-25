import { State } from '@ngxs/store';
import { Injectable } from '@angular/core';

export interface ChartsStateModel {
  name: string,
  userName: string
}

const initialData: ChartsStateModel = {
  name: 'Udi',
  userName: 'udi101'
};


@State<ChartsStateModel>({
  name: 'chartsState',
  defaults: initialData
})
@Injectable()
export class ChartsState {
  
}
