import { State, Action, StateContext, Selector } from '@ngxs/store';
import { AddOwner, GetOwners, GetOwnersFromNet } from './ag-grid-actions';
import { Observable, of, tap } from 'rxjs';
import { Injectable } from '@angular/core';

export interface Owner {
  firstName: string;
  lastName: string;
  make: string;
  model: string;
  price: number;
}

export interface AgGridStateModel {
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

const initialData: AgGridStateModel = {
  owners: [],
  isValid: true
};


@State<AgGridStateModel>({
  name: 'agGridState',
  defaults: initialData
})


@Injectable()
export class AgGridState {

  @Selector()
  static getOwners({ owners }: AgGridStateModel) {
    return owners;
  }

  @Action(GetOwners)
  getOwners(ctx: StateContext<AgGridStateModel>): Observable<void> {
    ctx.patchState({ owners });
    return of(undefined).pipe(
      tap(() => {
        const owner: Owner = {
          firstName: 'Ella',
          lastName: 'Fingirit',
          make: 'Toyota',
          price: 32_000,
          model: 'Corola'
        };
        ctx.dispatch(new AddOwner(owner));
      })
    );

  }

  @Action(GetOwnersFromNet, { cancelUncompleted: true })
  getOwnersFromNet(ctx: StateContext<AgGridStateModel>) {
    return getOwnersFromNet$.pipe(
      tap(() => {
        ctx.dispatch(GetOwners);
      })
    );

  }

  @Action(AddOwner)
  addOwner(ctx: StateContext<AgGridStateModel>, action: AddOwner) {
    const state = ctx.getState();
    ctx.patchState({ owners: [...state.owners, action.payload] });
  }
}


const getOwnersFromNet$ = new Observable<boolean>(observer => {
  setTimeout(() => {
    observer.next(true);
  }, 200);
  setTimeout(() => {
    observer.complete();
  }, 210);

});
