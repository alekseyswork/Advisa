import { Injectable } from '@angular/core';

const Types: Array<IType> = [
  { id: 1, name: 'Type1', description: 'some' },
  { id: 2, name: 'Type2', description: 'some2' }
];
export interface IType {
  id: number;
  name: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class TypeService {

  constructor() { }
  load(): Array<IType> {
    return Types;
  }
}
