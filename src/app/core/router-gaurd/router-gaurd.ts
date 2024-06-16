import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot, Router, CanActivateChildFn, CanDeactivateFn } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from '../auth/auth.service';


export const authGaurd: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> =>{
  console.log("route ", route);
  let router = inject(Router);
  let authService = inject(AuthService);

  const loginUser = authService.isAuthenticate();
  
  if(loginUser){
    return of(true);
  }else{
    router.navigate(['/']);
    return of(false);
  }
}

export const authGaurdChild: CanActivateChildFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> =>{
  console.log("route ", route);
  let router = inject(Router);
  let authService = inject(AuthService);

  const loginUser = authService.isAuthenticate();
  const isAccessible = false;
  const url = state.url;
  
  if(loginUser && url !== '/admin/about'){
    return of(true);
  }else{
    router.navigate(['/admin']);
    return of(false);
  }
}

export interface Deacticate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}  

export const authGaurdDeactivate: CanDeactivateFn<Deacticate> = (component: Deacticate, route: ActivatedRouteSnapshot, state: RouterStateSnapshot, nextState: RouterStateSnapshot) => {
  return component.canDeactivate();
}




