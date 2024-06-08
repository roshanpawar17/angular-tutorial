import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpContext, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http'; 

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
  putData(data: any, id: number): Observable<any>{
    let params = new HttpParams();
    params = params.set('id', id);
    return this.http.put('locations', data, {params: params});  

  }

  // 4. patch
  patchData(data: any): Observable<any>{
    return this.http.patch('locations', data)
  }

  // 5. delete
  deleteData(id: number): Observable<any>{
    let params = new HttpParams()
    params = params.append('id' , id)
    return this.http.delete('locations', {params: params})
    // this.http.delete()
  }

  // 6. get
  getData(): Observable<any>{
    return this.http.get('locations');
  }  

  // 7. head
  headData(): Observable<any>{
    return this.http.head('locations');
  }  

  // 8. JSONP
  jsonpData(): Observable<any>{
    return this.http.jsonp('locations?callback=JSONP_CALLBACK', 'callback')
  }  

  // 9. options
  optionsData(): Observable<any>{
    let headers = new HttpHeaders();
    // headers.keys()
    headers = headers.append("Access-Control-Allow-Method", "GET")
    headers = headers.append("Access-Control-Allow-Origin", "*")
    return this.http.options('locations', {headers: headers})
  }  

  

}
