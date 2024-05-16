import { State, Action, StateContext, Select, Selector } from '@ngxs/store';
import { GetOwners } from './ag-grid-actions';

export interface Owner {
  firstName: string;
  lastName: string;
  make: string;
  model: string;
  price: number;
}

export interface AgGridState {
  owners: Owner[];
  isValid: boolean;
}

const owners: Owner[] = [
  { firstName: 'Udi', lastName: 'Mazor', make: 'Chevrolet', model: 'Orlando', price: 35000 },
  { firstName: 'Avigail', lastName: 'Mazor', make: 'Chevrolet', model: 'Orlando', price: 60000 },
  { firstName: 'Yulia', lastName: 'Haviv', make: 'Porsche', model: 'Crossover', price: 172000 },
  { firstName: 'Emma', lastName: 'Watson', make: 'Subaro', model: 'Forester', price: 72000 },
  { firstName: 'Michal', lastName: 'Tzarfati', make: 'hyundai', model: 'i25', price: 72000 },
  { firstName: 'Gal', lastName: 'Gadot', make: 'Audi', model: 'Q8', price: 92000 },
  { firstName: 'Noa', lastName: 'Tishbi', make: 'BMW', model: 'X8', price: 112000 }
];

const initialData: AgGridState = {
  owners: [],
  isValid: true
};


@State<AgGridState>({
  name: 'agGridState',
  defaults: initialData
})


export class OwnersState {
  @Action(GetOwners)
  getOwners(ctx: StateContext<AgGridState>) {
    ctx.patchState({ owners });
  }
}
