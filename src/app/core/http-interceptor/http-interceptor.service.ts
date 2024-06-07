import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, throwError } from 'rxjs';
import { Environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor{

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    let domain = Environment.domain;
    let base_url = Environment.BACKEND_URL;
    let currentToken = "ueudjdhsftwywjws";
    let finalUrl = "";
    let headers;

    finalUrl = base_url + req.url;
    console.log("req url ", req.url);
    console.log("finalUrl ", finalUrl);

    if(finalUrl.startsWith("http://wmaster")){
      headers = req.headers.set("Authorization", 'Bearer ' + currentToken);
    }else{
      const hostName = location.host;
      if(hostName.startsWith("localhost")){
        // headers = req.headers.set("domain", domain);
        headers = req.headers.set('Content-Type', 'application/json');
        console.log("headers ", headers);
      }
    }

    let securedReq = req.clone({
      // withCredentials: true,
      url: finalUrl,
      headers: headers
    }); 

    console.log("secureReq ", securedReq);

    // return next.handle()
    return next.handle(securedReq).pipe(
      tap({
        next: (event: HttpEvent<any>)=> {
          if(event instanceof HttpResponse){

          }
        },
        error: (err: any)=>{
          if(err instanceof HttpErrorResponse){
            if(err.status === 401){
              // throwError(()=> new Error("Unauthorized"));
              throw new Error("Unauthorized");
            }else{
              throw new Error(err.error.message);
            }
          }
        }
      })
    )
  }
}
