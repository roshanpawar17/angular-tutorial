import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() {

  }

  getUsers(): Observable<any>{
    return of([
      {
        id: 1,
        name: 'Roshan',
        queryParams: {
          page: 1,
          search: 'Angular'
        }
      },
      {
        id: 2,
        name: 'Raj',
        queryParams: {
          page: 2,
          search: 'Testing'
        }
      },
      {
        id: 3,
        name: 'Harsh',
        queryParams: {
          page: 3,
          search: 'Javascript'
        }
      },
      {
        id: 4,
        name: 'Omkar',
        queryParams: {
          page: 4,
          search: 'DataAnalyst'
        }
      },
    ])
  }

  getUsersParams(id: number, name: string){
      return {
        id: id,
        name: name
      }
  }    
}
