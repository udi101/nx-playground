import { Owner } from './ag-grid.state';

export class GetOwners {
  static readonly type = '[Grid] Get Owners';
}

export class AddOwner {
  static readonly type = '[Grid] Add Owner';

  constructor(public payload: Owner) {
  }
}

export class GetOwnersFromNet {
  static readonly type = '[Grid] Get Owners From Net';

}
