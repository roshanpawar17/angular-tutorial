import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    @Inject(HttpClient) private httpClient: HttpClient
  ) { }

  login(data: any): Observable<any>{
    console.log(data)
    return this.httpClient.post('/login', data)
    // return this.httpClient.get('/login')
  }
}
