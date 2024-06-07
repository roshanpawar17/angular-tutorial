import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams, HttpRequest } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    @Inject(HttpClient) private http: HttpClient
  ) { }

  // 1. request
  requestData(): Observable<any>{
    // return this.http.request('POST', '/login', {body: JSON.stringify(data)});

    const httpRequest = new HttpRequest('GET', 'locations');
    return this.http.request(httpRequest);

    // return this.http.post('/login', data);
    // return this.http.get('/login');
  }

  // 2. post
  postData(data: any): Observable<any>{
    return this.http.post('locations', data);  
  }

  // 3. put
  putData(data: any): Observable<any>{
    const param = new HttpParams();
    param.set("id", 10);
    return this.http.put('locations', JSON.stringify(data), {params: param});  
  }
}
